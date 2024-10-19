'use client'

import { ReactNode } from 'react'
import '@xyflow/react/dist/style.css'
import Sidebar from '@/components/Sidebar'
import DotPattern from '@/components/ui/dot-pattern'
import { cn } from '@/lib/utils'

export default function BoardLayout({ children }: { children: ReactNode }) {
	return (
		<div className="w-screen h-screen flex flex-row bg-[#EDE9E2]">
			<Sidebar />
			<div className="absolute inset-0 z-0 overflow-hidden">
				<DotPattern width={20} height={20} cx={1} cy={1} cr={1} className={cn('[mask-image:linear-gradient(to_bottom_right,white,rgba(255,255,255,0.6))]', 'opacity-60')} />
			</div>
			{children}
		</div>
	)
}
