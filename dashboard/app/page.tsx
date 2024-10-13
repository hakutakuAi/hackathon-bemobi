'use client'

import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import { Button } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation' // Importando o useRouter

export default function Home() {
	const [isClient, setIsClient] = useState(false)
	const router = useRouter() // Instanciando o useRouter

	useEffect(() => {
		setIsClient(true)
	}, [])

	// Função de login e redirecionamento
	const handleLogin = () => {
		// Adicione a lógica de autenticação aqui se necessário
		router.push('/Chat') // Redireciona para a rota /Chat
	}

	return (
		<div className="flex bg-[#EDE9E2] justify-center gap-20 flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			{isClient && (
				<>
					<Image src={Logo} alt="Logo hakutaku" />
					<Button onClick={handleLogin}>Entrar</Button> {/* Adiciona o onClick para redirecionar */}
				</>
			)}
		</div>
	)
}
