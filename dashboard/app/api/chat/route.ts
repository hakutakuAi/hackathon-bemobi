import { openai } from '@ai-sdk/openai'
import { streamText, convertToCoreMessages, tool, CoreMessage } from 'ai'
import { z } from 'zod'
import QdrantSingleton from '@/services/qdrant'
import { embed } from 'ai'
import { kv } from '@vercel/kv'

export const maxDuration = 15

const getInformationTool = tool({
	description: `Find relevant information to answer a user's question by searching the knowledge base. Prioritize retrieving factual and contextually similar data. Use Qdrant for semantic similarity in searches. This tool can be repeated as necessary to refine or expand information on different subtopics within the user’s question.`,
	parameters: z.object({
		question: z.string().describe("The user's question to search in the knowledge base."),
	}),
	execute: async ({ question }) => {
		try {
			const client = QdrantSingleton.getClient()

			if (!process.env.EMBEDDING_MODEL_NAME) {
				throw new Error('EMBEDDING_MODEL_NAME is not defined.')
			}

			if (!process.env.QDRANT_COLLECTION_NAME) {
				throw new Error('QDRANT_COLLECTION_NAME is not defined.')
			}

			const { embedding } = await embed({
				model: openai.embedding(String(process.env.EMBEDDING_MODEL_NAME), {
					dimensions: 1536,
				}),
				value: question,
			})

			const collectionName = String(process.env.QDRANT_COLLECTION_NAME)
			if (!collectionName) {
				throw new Error('QDRANT_COLLECTION_NAME is not defined.')
			}

			console.log('Executing getInformationTool with question:', question)
			const searchResults = await client.search(collectionName, { vector: embedding, limit: 5 })
			console.log('Search results:', searchResults)

			if (!searchResults || searchResults.length === 0) {
				return null
			}

			const information = searchResults
				.map((result) => {
					const payload = result.payload
					if (typeof payload === 'object') {
						return JSON.stringify(payload)
					}
					return String(payload)
				})
				.join('\n')
			console.log('Information:', information)

			return information
		} catch (error) {
			console.error('Error executing getInformation tool:', error)
			return null
		}
	},
})

const storeMissingInformationTool = tool({
	description: `Store any question that the AI couldn't answer with relevant information, along with a summary of the missing data. This helps in building a more comprehensive knowledge base for future queries.`,
	parameters: z.object({
		question: z.string().describe("User's question without an answer."),
		summary: z.string().describe('A brief summary of the missing information, capturing key topics.'),
	}),
	execute: async ({ question, summary }) => {
		const missingInfo = `Question: ${question}\nMissing: ${summary}`
		await kv.lpush('missingInformation', missingInfo)
		return 'Missing information stored successfully.'
	},
})

export async function POST(req: Request) {
	try {
		const { messages, nodeId, connectedNodes }: { messages: any; nodeId?: string; connectedNodes?: string[] } = await req.json()
		await kv.incr('chatCount')

		let combinedMessages = convertToCoreMessages(messages)

		if (nodeId && connectedNodes) {
			const sharedContexts = await Promise.all(
				connectedNodes.map(async (connectedNodeId: string) => {
					const context = await kv.get(`sharedContext:${connectedNodeId}`)
					return (context as CoreMessage[]) || []
				})
			)
			combinedMessages = [...(sharedContexts.flat() as CoreMessage[]), ...combinedMessages]
		}

		const result = await streamText({
			model: openai('gpt-4o'),
			messages: combinedMessages,
			system: `You are a diligent assistant. Use the getInformationTool to retrieve relevant information before answering. If no suitable information is found, use the storeMissingInformationTool to log the question and summary of missing data. Always verify your responses against retrieved information and indicate any gaps in available knowledge.`,
			tools: {
				getInformation: getInformationTool,
				storeMissingInformation: storeMissingInformationTool,
			},
			maxSteps: 5,
		})

		if (nodeId) {
			await kv.set(`sharedContext:${nodeId}`, combinedMessages)
		}

		return result.toDataStreamResponse()
	} catch (error) {
		console.error('Error in ChatbotHandler:', error)
		return new Response(JSON.stringify({ error: 'Internal Server Error.' }), { status: 500 })
	}
}
