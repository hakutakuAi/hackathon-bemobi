import { NextResponse } from 'next/server'
import AirbyteService from '@/services/airbyte'

export async function GET() {
	const client = new AirbyteService()
	await client.initialize()

	const response = await client.connections.getAll()

	return NextResponse.json(response)
}
