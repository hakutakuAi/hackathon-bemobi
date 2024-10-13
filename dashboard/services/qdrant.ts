import { QdrantClient } from '@qdrant/js-client-rest'

export default class QdrantSingleton {
	private static instance: QdrantSingleton
	private client: QdrantClient

	private constructor() {
		this.client = new QdrantClient({
			url: process.env.QDRANT_API_URL,
			apiKey: process.env.QDRANT_API_KEY,
		})
	}

	public static getClient(): QdrantClient {
		if (!QdrantSingleton.instance) {
			QdrantSingleton.instance = new QdrantSingleton()
		}

		return QdrantSingleton.instance.client
	}
}
