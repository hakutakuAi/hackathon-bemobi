'use client'

import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import { Button } from '@nextui-org/react'
import { useEffect, useState } from 'react'

export default function Home() {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<div className="flex bg-[#EDE9E2] justify-center gap-20 flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			{isClient && (
				<>
					<Image src={Logo} alt="Logo hakutaku" />
					<Button>Login</Button>
				</>
			)}
		</div>
	)
}
