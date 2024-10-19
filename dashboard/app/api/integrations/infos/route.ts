import { NextResponse } from 'next/server'
import QdrantSingleton from '@/services/qdrant'
import { kv } from '@vercel/kv'
import { unstable_noStore as noStore } from 'next/cache'

export async function GET() {
	noStore()
	const client = QdrantSingleton.getClient()

	const telemetry = await client.api('service').telemetry({
		anonymize: true,
	})
	const vectorCount = await client.count(String(process.env.QDRANT_COLLECTION_NAME))

	const chatCount = (await kv.get('chatCount')) || 0
	const missingInformation = (await kv.lrange('missingInformation', 0, -1)) || []

	return NextResponse.json({
		qdrant: telemetry.data.result,
		chatCount,
		missingInformation,
		vectorCount: vectorCount.count,
	})
}
