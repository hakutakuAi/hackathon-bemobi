import { NextResponse } from 'next/server'
import AirbyteSingleton from '@/services/airbyte'

export async function GET() {
	const client = AirbyteSingleton.getClient()

	const sources = await client.getSources()

	return NextResponse.json(sources)
}
