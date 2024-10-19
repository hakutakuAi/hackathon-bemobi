'use client'

import React, { useRef } from 'react'
import { cn } from '@/lib/utils'
import { AnimatedBeam } from '@/components/ui/animated-beam'
import { SiGooglesheets, SiNotion } from 'react-icons/si'
import { FaDatabase, FaUser } from 'react-icons/fa'
import HakutakuIcon from '@/assets/HKTK-R02_AVATAR-FACE-01.png'
import Image from 'next/image'
import { Tooltip } from '@nextui-org/tooltip'
import GoogleDriveLogo from '@/assets/google-drive.svg'
import FlickeringGrid from '@/components/ui/flickering-grid'
import useSWR from 'swr'

interface Integration {
	connectionId: string
	name: string
	source: {
		sourceType: string
		name: string
		configuration: any
	}
	destination: {
		name: string
		configuration: any
	}
	status: string
	schedule: {
		scheduleType: string
		basicTiming: string
	}
}

const Circle = React.forwardRef<
	HTMLDivElement,
	{
		className?: string
		children?: React.ReactNode
		style?: React.CSSProperties
		onClick?: () => void
		tooltipContent?: React.ReactNode
	}
>(({ className, children, style, onClick, tooltipContent }, ref) => {
	return (
		<Tooltip content={tooltipContent} isDisabled={!tooltipContent}>
			<div
				ref={ref}
				className={cn(
					'z-10 flex size-16 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] cursor-pointer transition-transform hover:scale-110',
					className
				)}
				style={style}
				onClick={onClick}
			>
				{children}
			</div>
		</Tooltip>
	)
})

Circle.displayName = 'Circle'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function AnimatedConnections() {
	const containerRef = useRef<HTMLDivElement>(null)
	const { data: integrations = [], error } = useSWR<Integration[]>('/api/integrations/connections', fetcher)
	const circleRefs = integrations.map(() => React.createRef<HTMLDivElement>())
	const hakutakuRef = useRef<HTMLDivElement>(null)
	const userRef = useRef<HTMLDivElement>(null)

	if (error) {
		console.error('Error fetching integrations:', error)
	}

	const getIcon = (sourceType: string) => {
		switch (sourceType.toLowerCase()) {
			case 'google-sheets':
				return <SiGooglesheets className="h-6 w-6 text-green-600" width={32} height={32} />
			case 'notion':
				return <SiNotion className="h-6 w-6 text-gray-800" width={32} height={32} />
			case 'google-drive':
				return <Image src={GoogleDriveLogo} alt="Google Drive Logo" width={32} height={32} />
			default:
				return <FaDatabase className="h-6 w-6 text-blue-600" />
		}
	}

	const handleSourceClick = (integration: Integration) => {
		if (integration.source.sourceType.toLowerCase() === 'google-sheets') {
			window.open(integration.source.configuration.spreadsheet_id, '_blank')
		} else if (integration.source.sourceType.toLowerCase() === 'google-drive') {
			window.open(integration.source.configuration.folder_url, '_blank')
		}
	}

	const getTooltipContent = (integration: Integration) => (
		<div>
			<p>
				<strong>{integration.name}</strong>
			</p>
			<p>Status: {integration.status}</p>
			<p>Atualizações: {integration.schedule.basicTiming}</p>
			<p>Fonte: {integration.source.name}</p>
		</div>
	)

	return (
		<div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl" ref={containerRef}>
			<div className="absolute inset-0 z-0 overflow-hidden">
				<FlickeringGrid className={cn('[mask-image:linear-gradient(to_bottom_right,white,rgba(255,255,255,0.6))]', 'opacity-60', 'w-full', 'h-full')} />
			</div>
			<div className="relative z-10 flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
				<div className="flex flex-col justify-center gap-4">
					{integrations.map((integration, index) => (
						<Circle key={integration.connectionId} ref={circleRefs[index]} onClick={() => handleSourceClick(integration)} tooltipContent={getTooltipContent(integration)}>
							{getIcon(integration.source.sourceType)}
						</Circle>
					))}
				</div>
				<div className="flex flex-col justify-center">
					<Circle ref={hakutakuRef} className="size-16">
						<Image src={HakutakuIcon} alt="Hakutaku Icon" width={64} height={64} />
					</Circle>
				</div>
				<div className="flex flex-col justify-center">
					<Circle ref={userRef}>
						<FaUser className="h-6 w-6 text-gray-600" />
					</Circle>
				</div>
			</div>

			{integrations.map((integration, index) => (
				<AnimatedBeam key={integration.connectionId} containerRef={containerRef} fromRef={circleRefs[index]} toRef={hakutakuRef} pathWidth={3} />
			))}
			<AnimatedBeam containerRef={containerRef} fromRef={hakutakuRef} toRef={userRef} pathWidth={3} />
		</div>
	)
}
