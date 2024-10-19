import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

export async function POST(req: Request) {
	try {
		const { index } = await req.json()

		if (typeof index !== 'number' || index < 0) {
			return NextResponse.json({ error: 'Invalid index provided' }, { status: 400 })
		}

		const missingInformation = (await kv.lrange('missingInformation', 0, -1)) || []

		if (index >= missingInformation.length) {
			return NextResponse.json({ error: 'Index out of range' }, { status: 400 })
		}
		const updatedMissingInformation = missingInformation.filter((_, i) => i !== index)

		await kv.del('missingInformation')
		if (updatedMissingInformation.length > 0) {
			await kv.rpush('missingInformation', ...updatedMissingInformation)
		}

		return NextResponse.json({ success: true, message: 'Item removed successfully' })
	} catch (error) {
		console.error('Error in solve-missing-info:', error)
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
	}
}
