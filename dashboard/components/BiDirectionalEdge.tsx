import React, { useState, useMemo, useCallback } from 'react'
import { getBezierPath, useReactFlow, BaseEdge, EdgeProps, EdgeLabelRenderer, Position } from 'reactflow'

export type GetSpecialPathParams = {
	sourceX: number
	sourceY: number
	targetX: number
	targetY: number
}

export const getSpecialPath = ({ sourceX, sourceY, targetX, targetY }: GetSpecialPathParams, offset: number) => {
	const centerX = (sourceX + targetX) / 2
	const centerY = (sourceY + targetY) / 2

	return `M ${sourceX} ${sourceY} Q ${centerX} ${centerY + offset} ${targetX} ${targetY}`
}

export default function CustomEdge({ id, source, target, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style = {}, markerEnd }: EdgeProps) {
	const { getEdges, setEdges } = useReactFlow()
	const [isHovered, setIsHovered] = useState(false)
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

	const isBiDirectionEdge = useMemo(() => {
		const edges = getEdges()
		return edges.some((e) => (e.source === target && e.target === source) || (e.target === source && e.source === target))
	}, [getEdges, source, target])

	const edgePathParams = {
		sourceX,
		sourceY,
		sourcePosition,
		targetX,
		targetY,
		targetPosition,
	}

	const [edgePath, labelX, labelY] = getBezierPath(edgePathParams)

	const path = isBiDirectionEdge ? getSpecialPath(edgePathParams, sourceX < targetX ? 25 : -25) : edgePath

	const gradientId = `gradient-${id}`
	const animationId = `flow-${id}`
	const pulseAnimationId = `pulse-${id}`

	const onEdgeClick = useCallback(
		(event: React.MouseEvent<HTMLButtonElement>) => {
			event.stopPropagation()
			setEdges((edges) => edges.filter((edge) => edge.id !== id))
		},
		[id, setEdges]
	)

	const onEdgeMouseEnter = useCallback(() => {
		setIsHovered(true)
	}, [])

	const onEdgeMouseLeave = useCallback(() => {
		setIsHovered(false)
	}, [])

	const onEdgeMouseMove = useCallback((event: React.MouseEvent<SVGPathElement>) => {
		setMousePosition({ x: event.clientX, y: event.clientY })
	}, [])

	return (
		<>
			<defs>
				<linearGradient id={gradientId} x1="100%" y1="0%" x2="0%" y2="0%">
					<stop offset="0%" stopColor="#FF791F" />
					<stop offset="100%" stopColor="#FF5300" />
				</linearGradient>
				<marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
					<path d="M 0 0 L 10 5 L 0 10 z" fill="#FF791F" />
				</marker>
			</defs>
			<BaseEdge path={path} markerEnd="url(#arrow)" style={{ ...style, stroke: '#FFF5E6' }} />
			<path d={path} fill="none" strokeOpacity={0} strokeWidth={20} onMouseEnter={onEdgeMouseEnter} onMouseLeave={onEdgeMouseLeave} onMouseMove={onEdgeMouseMove} />
			<path d={path} stroke={`url(#${gradientId})`} strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="10,10" style={{ filter: `url(#${pulseAnimationId})` }}>
				<animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite" />
			</path>
			<circle r="3" fill="#FF791F">
				<animateMotion dur="2s" repeatCount="indefinite">
					<mpath href={`#${id}`} />
				</animateMotion>
			</circle>
			{isBiDirectionEdge && (
				<circle r="3" fill="#FF5300">
					<animateMotion dur="2s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1">
						<mpath href={`#${id}`} />
					</animateMotion>
				</circle>
			)}
			<EdgeLabelRenderer>
				<div
					style={{
						position: 'fixed',
						left: mousePosition.x,
						top: mousePosition.y,
						transform: 'translate(-50%, -50%)',
						opacity: isHovered ? 1 : 0,
						transition: 'opacity 0.3s',
						pointerEvents: isHovered ? 'all' : 'none',
						zIndex: 1000,
					}}
					className="nodrag nopan"
				>
					<button className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors duration-300" onClick={onEdgeClick}>
						×
					</button>
				</div>
			</EdgeLabelRenderer>
		</>
	)
}
