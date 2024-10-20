import AirbyteService from '@/services/airbyte'

export const runtime = 'edge'

export async function GET() {
	const client = new AirbyteService()
	await client.initialize()

	const connectionsResponse = await client.connections.getAll()
	const connections = connectionsResponse.data

	const enrichedConnections = await Promise.all(
		connections.map(async (connection: any) => {
			const sourceDetails = await client.sources.getById(connection.sourceId)
			const destinationDetails = await client.destinations.getById(connection.destinationId)

			return {
				...connection,
				source: sourceDetails,
				destination: destinationDetails,
			}
		})
	)

	return Response.json(enrichedConnections)
}
