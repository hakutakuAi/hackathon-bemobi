'use client'

import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import { Button } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
	const [isClient, setIsClient] = useState(false)
	const router = useRouter()

	useEffect(() => {
		setIsClient(true)
	}, [])

	const handleLogin = () => {
		router.push('/Chat')
	}

	return (
		<div className="flex bg-[#EDE9E2] justify-center gap-20 flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			{isClient && (
				<>
					<Image src={Logo} alt="Logo hakutaku" />
					<Button onClick={handleLogin}>Entrar</Button> {}
				</>
			)}
		</div>
	)
}
