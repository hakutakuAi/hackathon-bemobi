import { NextResponse } from 'next/server'
import QdrantSingleton from '@/services/qdrant'

export async function GET() {
	const client = QdrantSingleton.getClient()

	const collections = await client.getCollections()

	return NextResponse.json(collections)
}
