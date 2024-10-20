import QdrantSingleton from '@/services/qdrant'
import { kv } from '@vercel/kv'

export const runtime = 'edge'

export async function GET() {
	const client = QdrantSingleton.getClient()

	const telemetry = await client.api('service').telemetry({
		anonymize: true,
	})
	const vectorCount = await client.count(String(process.env.QDRANT_COLLECTION_NAME))

	const chatCount = (await kv.get('chatCount')) || 0
	const missingInformation = (await kv.lrange('missingInformation', 0, -1)) || []

	return Response.json({
		qdrant: telemetry.data.result,
		chatCount,
		missingInformation,
		vectorCount: vectorCount.count,
	})
}
