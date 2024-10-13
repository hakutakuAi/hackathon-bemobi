import * as AirbyteGenerated from '@/clients/airbyte'
import globalAxios from 'axios'

export default class AirbyteService {
	private client: AirbyteGenerated.Configuration | null = null

	constructor() {}

	public async initialize(): Promise<void> {
		if (!this.client) {
			const response = await (
				await this.getApplicationsApi()
			).createAccessToken({
				applicationTokenRequestWithGrant: {
					client_id: process.env.AIRBYTE_CLIENT_ID!,
					client_secret: process.env.AIRBYTE_CLIENT_SECRET!,
				},
			})

			globalAxios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`
			this.client = new AirbyteGenerated.Configuration({
				basePath: process.env.AIRBYTE_API_URL,
				accessToken: response.data.access_token,
			})
		}
	}

	private async getConnectionsApi(): Promise<AirbyteGenerated.ConnectionsApi> {
		return new AirbyteGenerated.ConnectionsApi(this.client!)
	}

	private async getDestinationsApi(): Promise<AirbyteGenerated.DestinationsApi> {
		return new AirbyteGenerated.DestinationsApi(this.client!)
	}

	private async getSourcesApi(): Promise<AirbyteGenerated.SourcesApi> {
		return new AirbyteGenerated.SourcesApi(this.client!)
	}

	private async getStreamsApi(): Promise<AirbyteGenerated.StreamsApi> {
		return new AirbyteGenerated.StreamsApi(this.client!)
	}

	private async getWorkspacesApi(): Promise<AirbyteGenerated.WorkspacesApi> {
		return new AirbyteGenerated.WorkspacesApi(this.client!)
	}

	private async getApplicationsApi(): Promise<AirbyteGenerated.ApplicationsApi> {
		return new AirbyteGenerated.ApplicationsApi()
	}

	private async getJobsApi(): Promise<AirbyteGenerated.JobsApi> {
		return new AirbyteGenerated.JobsApi(this.client!)
	}

	public async getConnections() {
		const api = await this.getConnectionsApi()
		const connections = await api.listConnections()
		return connections.data
	}

	public async getSources() {
		const api = await this.getSourcesApi()
		const sources = await api.listSources()
		return sources.data
	}
}
