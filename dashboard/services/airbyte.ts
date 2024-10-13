import * as AirbyteGenerated from '@/clients/airbyte'
import { JobTypeEnum } from '@/clients/airbyte'
import globalAxios from 'axios'

export default class AirbyteService {
	private client: AirbyteGenerated.Configuration | null = null
	private workspaceId = process.env.AIRBYTE_WORKSPACE_ID

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

			if (!this.workspaceId) {
				const workspaces = await this.workspaces.getAll()
				this.workspaceId = workspaces.data[0].workspaceId
			}
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

	private async getWorkspacesApi(): Promise<AirbyteGenerated.WorkspacesApi> {
		return new AirbyteGenerated.WorkspacesApi(this.client!)
	}

	private async getApplicationsApi(): Promise<AirbyteGenerated.ApplicationsApi> {
		return new AirbyteGenerated.ApplicationsApi()
	}

	private async getJobsApi(): Promise<AirbyteGenerated.JobsApi> {
		return new AirbyteGenerated.JobsApi(this.client!)
	}

	public connections = {
		create: async () => {
			const api = await this.getConnectionsApi()
			const connections = await api.listConnections()
			return connections.data
		},
	}

	public destinations = {
		create: async (name: string, configuration: any) => {
			const api = await this.getDestinationsApi()
			const response = await api.createDestination({
				destinationCreateRequest: {
					name,
					configuration,
					workspaceId: this.workspaceId,
				},
			})
			return response.data
		},
		delete: async (destinationId: string) => {
			const api = await this.getDestinationsApi()
			const response = await api.deleteDestination({ destinationId })
			return response.data
		},
		getAll: async () => {
			const api = await this.getDestinationsApi()
			const destinations = await api.listDestinations()
			return destinations.data
		},
		getById: async (destinationId: string) => {
			const api = await this.getDestinationsApi()
			const destination = await api.getDestination({ destinationId })
			return destination.data
		},
	}

	public jobs = {
		getAll: async () => {
			const api = await this.getJobsApi()
			const jobs = await api.listJobs()
			return jobs.data
		},
		getById: async (jobId: number) => {
			const api = await this.getJobsApi()
			const job = await api.getJob({ jobId })
			return job.data
		},
		create: async (connectionId: string, jobType: JobTypeEnum) => {
			const api = await this.getJobsApi()
			const response = await api.createJob({
				jobCreateRequest: {
					connectionId,
					jobType,
				},
			})
			return response.data
		},
		cancel: async (jobId: number) => {
			const api = await this.getJobsApi()
			const response = await api.cancelJob({ jobId })
			return response.data
		},
	}

	public sources = {
		create: async (name: string, configuration: any) => {
			const api = await this.getSourcesApi()
			const response = await api.createSource({
				sourceCreateRequest: {
					name,
					configuration,
					workspaceId: this.workspaceId,
				},
			})
			return response.data
		},

		delete: async (sourceId: string) => {
			const api = await this.getSourcesApi()
			const response = await api.deleteSource({ sourceId })
			return response.data
		},
		getAll: async () => {
			const api = await this.getSourcesApi()
			const sources = await api.listSources()
			return sources.data
		},
		getById: async (sourceId: string) => {
			const api = await this.getSourcesApi()
			const source = await api.getSource({ sourceId })
			return source.data
		},
	}

	public workspaces = {
		getAll: async () => {
			const api = await this.getWorkspacesApi()
			const workspaces = await api.listWorkspaces()
			return workspaces.data
		},
	}
}
