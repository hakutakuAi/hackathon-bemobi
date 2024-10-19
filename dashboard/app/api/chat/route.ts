import { openai } from '@ai-sdk/openai'
import { streamText, convertToCoreMessages, tool } from 'ai'
import { z } from 'zod'
import QdrantSingleton from '@/services/qdrant'
import { embed } from 'ai'
import { kv } from '@vercel/kv'

export const maxDuration = 15

const getInformationTool = tool({
	description: `Retrieve relevant information from the knowledge base to answer the user's question. Utilize the Qdrant vector database to find the most semantically similar documents. You can use it repeatedly to find information on different topics.`,
	parameters: z.object({
		question: z.string().describe("The user's question for which information is sought."),
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
			const searchResults = await client.search(collectionName, { vector: embedding, limit: 10 })
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
	description: `Store information that is missing from the knowledge base.`,
	parameters: z.object({
		question: z.string().describe("The user's question that couldn't be answered."),
		summary: z.string().describe('A brief summary of the missing information.'),
	}),
	execute: async ({ question, summary }) => {
		const missingInfo = `Question: ${question}\nMissing: ${summary}`
		await kv.lpush('missingInformation', missingInfo)
		return 'Missing information stored successfully.'
	},
})

export async function POST(req: Request) {
	try {
		const { messages, nodeId, connectedNodes } = await req.json()
		await kv.incr('chatCount')

		const sharedContexts = await Promise.all(
			connectedNodes.map(async (connectedNodeId: string) => {
				const context = await kv.get(`sharedContext:${connectedNodeId}`)
				return context || []
			})
		)

		const combinedMessages = [...sharedContexts.flat(), ...convertToCoreMessages(messages)]

		const result = await streamText({
			model: openai('gpt-4o'),
			messages: combinedMessages,
			system: `You are a helpful assistant. Check your knowledge base before answering any questions. If you can't find relevant information, use the storeMissingInformationTool to record what information is missing. Provide a brief, clear response to the user explaining that you don't have the information and that it will be added to the missing information list.`,
			tools: {
				getInformation: getInformationTool,
				storeMissingInformation: storeMissingInformationTool,
			},
			maxSteps: 5,
		})
		await kv.set(`sharedContext:${nodeId}`, combinedMessages)
		return result.toDataStreamResponse()
	} catch (error) {
		console.error('Error in ChatbotHandler:', error)
		return new Response(JSON.stringify({ error: 'Internal Server Error.' }), { status: 500 })
	}
}
