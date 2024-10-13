import * as AirbyteGenerated from '@/clients/airbyte'

export class AirbyteService {
	private client: AirbyteGenerated.Configuration

	constructor() {
		this.client = new AirbyteGenerated.Configuration({
			basePath: process.env.AIRBYTE_API_URL,
			serverIndex: 0,
			accessToken: process.env.AIRBYTE_ACCESS_TOKEN,
		})
	}

	private getConnectionsApi(): AirbyteGenerated.ConnectionsApi {
		return new AirbyteGenerated.ConnectionsApi(this.client)
	}

	private getDestinationsApi(): AirbyteGenerated.DestinationsApi {
		return new AirbyteGenerated.DestinationsApi(this.client)
	}

	private getSourcesApi(): AirbyteGenerated.SourcesApi {
		return new AirbyteGenerated.SourcesApi(this.client)
	}

	private getStreamsApi(): AirbyteGenerated.StreamsApi {
		return new AirbyteGenerated.StreamsApi(this.client)
	}

	public async getSources() {
		const sources = await this.getSourcesApi().listSources()
		return sources.data
	}
}

export default class AirbyteSingleton {
	private static instance: AirbyteSingleton
	private service: AirbyteService

	private constructor() {
		this.service = new AirbyteService()
	}

	public static getClient(): AirbyteService {
		if (!AirbyteSingleton.instance) {
			AirbyteSingleton.instance = new AirbyteSingleton()
		}

		return AirbyteSingleton.instance.service
	}
}
