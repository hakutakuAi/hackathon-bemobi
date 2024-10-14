import { AssistantResponse } from 'ai'
import OpenAI from 'openai'
import { z } from 'zod'
import QdrantSingleton from '@/services/qdrant'

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY || '',
})

export const maxDuration = 30

const getInformationTool = {
	execute: async ({ question, tool_call_id }: { question: string; tool_call_id: string }) => {
		try {
			console.log('Executing getInformation tool:', question)
			const client = QdrantSingleton.getClient()

			const embeddingModelName = process.env.EMBEDDING_MODEL_NAME
			const qdrantCollectionName = process.env.QDRANT_COLLECTION_NAME

			if (!embeddingModelName) {
				throw new Error('EMBEDDING_MODEL_NAME is not defined.')
			}

			if (!qdrantCollectionName) {
				throw new Error('QDRANT_COLLECTION_NAME is not defined.')
			}

			const { data: embedding } = await openai.embeddings.create({
				model: embeddingModelName,
				input: question,
				dimensions: 1536,
			})

			const searchResults = await client.search(qdrantCollectionName, {
				vector: embedding[0].embedding,
				limit: 4,
			})

			if (!searchResults?.length) {
				return [
					{
						tool_call_id,
						output: "Sorry, I couldn't find any relevant information.",
					},
				]
			}

			const information = searchResults
				.map((result) => {
					const payload = result.payload
					return typeof payload === 'object' ? JSON.stringify(payload) : String(payload)
				})
				.join('\n')

			return [
				{
					tool_call_id,
					output: information,
				},
			]
		} catch (error) {
			console.error('Error executing getInformation tool:', error)
			return [
				{
					tool_call_id,
					output: 'Sorry, I encountered an error while fetching the information.',
				},
			]
		}
	},
}

export async function POST(req: Request) {
	try {
		const inputSchema = z.object({
			threadId: z.string().nullable(),
			message: z.string(),
		})

		const input = inputSchema.parse(await req.json())
		const threadId = input.threadId ?? (await openai.beta.threads.create({})).id

		const createdMessage = await openai.beta.threads.messages.create(threadId, {
			role: 'user',
			content: input.message,
		})

		return AssistantResponse({ threadId, messageId: createdMessage.id }, async ({ forwardStream }) => {
			let runStream = openai.beta.threads.runs.stream(threadId, {
				assistant_id:
					process.env.ASSISTANT_ID ??
					(() => {
						throw new Error('ASSISTANT_ID is not set')
					})(),
			})

			let runResult = await forwardStream(runStream)

			while (runResult?.status === 'requires_action' && runResult.required_action?.type === 'submit_tool_outputs') {
				const toolOutputs = await Promise.all(
					runResult.required_action.submit_tool_outputs.tool_calls.map(async (toolCall) => {
						const parameters = JSON.parse(toolCall.function.arguments)

						switch (toolCall.function.name) {
							case 'get_information_tool':
								return await getInformationTool.execute({
									question: parameters.question,
									tool_call_id: toolCall.id,
								})
							default:
								throw new Error(`Unknown tool call function: ${toolCall.function.name}`)
						}
					})
				)

				runResult = await forwardStream(openai.beta.threads.runs.submitToolOutputsStream(threadId, runResult.id, { tool_outputs: toolOutputs.flat() }))
			}
		})
	} catch (error) {
		console.error('Error in POST request handler:', error)
		return new Response('Error processing request', { status: 500 })
	}
}
