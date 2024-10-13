'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import openBar from '@/assets/openBar.svg'
import Logo from '@/assets/logo.svg'
import Chat from '@/components/Chat'
import DotPattern from '@/components/ui/dot-pattern'
import { cn } from '@/lib/utils'

const Home = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleSidebar = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className="relative flex min-h-screen bg-[#EDE9E2] font-[family-name:var(--font-geist-sans)] overflow-hidden">
			<div className="absolute inset-0 z-0 overflow-hidden">
				<DotPattern width={20} height={20} cx={1} cy={1} cr={1} className={cn('[mask-image:linear-gradient(to_bottom_right,white,rgba(255,255,255,0.6))]', 'opacity-60')} />
			</div>
			{!isOpen && (
				<div className="fixed top-4 left-4 z-20 flex items-center">
					<button className="p-2 text-black rounded" onClick={toggleSidebar}>
						<div className="flex flex-row">
							<Image src={openBar} alt="Abrir Menu" width={24} height={24} />
							<Image src={Logo} alt="Logo" width={70} height={70} />
						</div>
					</button>
				</div>
			)}

			<Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

			<main className={`flex-1 flex flex-col relative z-10 overflow-hidden transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`}>
				<div className="flex-1 overflow-hidden">
					<Chat />
				</div>
			</main>
		</div>
	)
}

export default Home
