import { kv } from '@vercel/kv'

export async function POST(request: Request) {
	try {
		const { index }: { index: number } = await request.json()

		if (typeof index !== 'number' || index < 0) {
			return Response.json({ error: 'Invalid index provided' }, { status: 400 })
		}

		const missingInformation = (await kv.lrange('missingInformation', 0, -1)) || []

		if (index >= missingInformation.length) {
			return Response.json({ error: 'Index out of range' }, { status: 400 })
		}
		const updatedMissingInformation = missingInformation.filter((_, i) => i !== index)

		await kv.del('missingInformation')
		if (updatedMissingInformation.length > 0) {
			await kv.rpush('missingInformation', ...updatedMissingInformation)
		}

		return Response.json({ success: true, message: 'Item removed successfully' })
	} catch (error) {
		console.error('Error in solve-missing-info:', error)
		return Response.json({ error: 'Internal Server Error' }, { status: 500 })
	}
}
