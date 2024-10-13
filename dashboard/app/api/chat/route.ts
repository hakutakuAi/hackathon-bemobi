import { openai } from '@ai-sdk/openai'
import { streamText, convertToCoreMessages } from 'ai'

export const maxDuration = 10

export async function POST(req: Request) {
	const { messages } = await req.json()

	const result = await streamText({
		model: openai('gpt-4o-mini'),
		messages: convertToCoreMessages(messages),
	})

	return result.toDataStreamResponse()
}
