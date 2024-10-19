'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Chat from '@/components/Chat'
import DotPattern from '@/components/ui/dot-pattern'
import { cn } from '@/lib/utils'

const ChatPage = () => {
	const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

	return (
		<div className="relative flex min-h-screen bg-[#EDE9E2] font-[family-name:var(--font-geist-sans)] overflow-hidden">
			<div className="absolute inset-0 z-0 overflow-hidden">
				<DotPattern width={20} height={20} cx={1} cy={1} cr={1} className={cn('[mask-image:linear-gradient(to_bottom_right,white,rgba(255,255,255,0.6))]', 'opacity-60')} />
			</div>

			<Sidebar onExpand={setIsSidebarExpanded} />
			<main className={cn('flex-1 flex flex-col relative z-10 overflow-hidden transition-all duration-300', 'md:ml-16', isSidebarExpanded ? 'md:ml-60' : 'md:ml-16', 'pt-16 md:pt-0')}>
				<div className="flex-1 overflow-hidden">
					<Chat />
				</div>
			</main>
		</div>
	)
}

export default ChatPage
