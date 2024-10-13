import { openai } from '@ai-sdk/openai'
import { streamText, convertToCoreMessages, tool } from 'ai'
import { z } from 'zod'
import QdrantSingleton from '@/services/qdrant'
import { embed } from 'ai'

export const maxDuration = 15

export const getInformationTool = tool({
	description: `Retrieve relevant information from the knowledge base to answer the user's question. Utilize the Qdrant vector database to find the most semantically similar documents.`,
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
			const searchResults = await client.search(collectionName, { vector: embedding, limit: 2 })
			console.log('Search results:', searchResults)

			if (!searchResults || searchResults.length === 0) {
				return "Sorry, I couldn't find any relevant information."
			}

			const information = searchResults
				.map((result) => {
					const payload = result.payload
					if (typeof payload === 'object') {
						return JSON.stringify(payload)
					}
					return String(payload)
				})
				.join('\n\n')

			return information
		} catch (error) {
			console.error('Error executing getInformation tool:', error)
			return 'Sorry, I encountered an error while fetching the information.'
		}
	},
})

export async function POST(req: Request) {
	try {
		const { messages } = await req.json()

		const result = await streamText({
			model: openai('gpt-4o'),
			messages: convertToCoreMessages(messages),
			system: `You are a helpful assistant. Check your knowledge base before answering any questions. Only respond to questions using information from tool calls. If no relevant information is found in the tool calls, respond, "Sorry, I don't know."`,
			tools: {
				getInformation: getInformationTool,
			},
			maxSteps: 2,
		})

		return result.toDataStreamResponse()
	} catch (error) {
		console.error('Error in ChatbotHandler:', error)
		return new Response(JSON.stringify({ error: 'Internal Server Error.' }), { status: 500 })
	}
}
