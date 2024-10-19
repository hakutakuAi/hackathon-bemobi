'use client'

import React, { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { AnimatedBeam } from '@/components/ui/animated-beam'
import { SiGooglesheets, SiNotion } from 'react-icons/si'
import { FaDatabase, FaUser } from 'react-icons/fa'
import HakutakuIcon from '@/assets/HKTK-R02_AVATAR-FACE-01.png'
import Image from 'next/image'
import { Tooltip } from '@nextui-org/tooltip'

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
					'z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] cursor-pointer transition-transform hover:scale-110',
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

export default function AnimatedConnections() {
	const containerRef = useRef<HTMLDivElement>(null)
	const [integrations, setIntegrations] = useState<Integration[]>([])
	const [circleRefs, setCircleRefs] = useState<React.RefObject<HTMLDivElement>[]>([])
	const hakutakuRef = useRef<HTMLDivElement>(null)
	const userRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const fetchIntegrations = async () => {
			try {
				const response = await fetch('/api/integrations/connections')
				const data = await response.json()
				setIntegrations(data)
				setCircleRefs(data.map(() => React.createRef<HTMLDivElement>()))
			} catch (error) {
				console.error('Error fetching integrations:', error)
			}
		}

		fetchIntegrations()
	}, [])

	const getIcon = (sourceType: string) => {
		switch (sourceType.toLowerCase()) {
			case 'google-sheets':
				return <SiGooglesheets className="h-6 w-6 text-green-600" />
			case 'notion':
				return <SiNotion className="h-6 w-6 text-gray-800" />
			default:
				return <FaDatabase className="h-6 w-6 text-blue-600" />
		}
	}

	const handleSourceClick = (integration: Integration) => {
		if (integration.source.sourceType.toLowerCase() === 'google-sheets') {
			window.open(integration.source.configuration.spreadsheet_id, '_blank')
		}
	}

	const getTooltipContent = (integration: Integration) => (
		<div>
			<p>
				<strong>{integration.name}</strong>
			</p>
			<p>Status: {integration.status}</p>
			<p>Schedule: {integration.schedule.basicTiming}</p>
			<p>Source: {integration.source.name}</p>
		</div>
	)

	return (
		<div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl" ref={containerRef}>
			<div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
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
				<AnimatedBeam key={integration.connectionId} containerRef={containerRef} fromRef={circleRefs[index]} toRef={hakutakuRef} duration={1} pathWidth={3} />
			))}
			<AnimatedBeam containerRef={containerRef} fromRef={hakutakuRef} toRef={userRef} duration={1} pathWidth={3} />
		</div>
	)
}
