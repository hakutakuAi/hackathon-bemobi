import { NextResponse } from 'next/server'
import QdrantSingleton from '@/services/qdrant'
import { kv } from '@vercel/kv'

export async function GET() {
	const client = QdrantSingleton.getClient()

	const telemetry = await client.api('service').telemetry({
		anonymize: true,
	})
	const vectorCount = await client.count(String(process.env.QDRANT_COLLECTION_NAME))

	const chatCount = (await kv.get('chatCount')) || 0
	const missingInformation = (await kv.lrange('missingInformation', 0, -1)) || []

	const response = NextResponse.json({
		qdrant: telemetry.data.result,
		chatCount,
		missingInformation,
		vectorCount: vectorCount.count,
	})

	response.headers.set('Cache-Control', 'no-store, max-age=0')

	return response
}
