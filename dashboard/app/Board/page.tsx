'use client'

import React, { useCallback, useState } from 'react'
import ReactFlow, {
	Background,
	Controls,
	MiniMap,
	useNodesState,
	useEdgesState,
	addEdge,
	Connection,
	Edge,
	NodeTypes,
	useReactFlow,
	ReactFlowProvider,
	Node,
	XYPosition,
	EdgeTypes,
	OnConnect,
	MarkerType,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { ChatNode } from '@/components/ChatNode'
import BiDirectionalEdge from '@/components/BiDirectionalEdge'
import { ConnectionMode } from '@xyflow/react'

const nodeTypes: NodeTypes = {
	chatNode: ChatNode,
}

const edgeTypes: EdgeTypes = {
	bidirectional: BiDirectionalEdge,
}

const initialNodes: Node[] = [
	{
		id: `${Date.now()}`,
		type: 'chatNode',
		position: { x: 250, y: 5 },
		data: { label: 'Chat' },
	},
]

const initialEdges: Edge[] = []

function FlowComponent() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
	const { project } = useReactFlow()
	const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null)

	const onConnect: OnConnect = useCallback((params) => setEdges((eds) => addEdge({ ...params, type: 'bidirectional', markerEnd: { type: MarkerType.ArrowClosed } }, eds)), [setEdges])

	const handleContextMenu = useCallback(
		(event: React.MouseEvent) => {
			event.preventDefault()
			const reactFlowBounds = document.querySelector('.react-flow')?.getBoundingClientRect()
			if (reactFlowBounds) {
				const position = project({
					x: event.clientX - reactFlowBounds.left,
					y: event.clientY - reactFlowBounds.top,
				})
				setContextMenu({ x: event.clientX, y: event.clientY })
			}
		},
		[project]
	)

	const handleAddNode = useCallback(
		(position: XYPosition) => {
			const newNode: Node = {
				id: `${Date.now()}`,
				type: 'chatNode',
				position,
				data: { label: 'Chat' },
			}
			setNodes((nds) => nds.concat(newNode))
			setContextMenu(null)
		},
		[setNodes]
	)

	const closeContextMenu = useCallback(() => {
		setContextMenu(null)
	}, [])

	return (
		<div style={{ width: '100%', height: '100%' }} onContextMenu={handleContextMenu} onClick={closeContextMenu}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				nodeTypes={nodeTypes}
				edgeTypes={edgeTypes}
				defaultEdgeOptions={{ type: 'bidirectional' }}
				fitView
				connectionMode={ConnectionMode.Loose}
			>
				<Background color="#f0f0f0" gap={16} />
				<Controls />
				<MiniMap />
			</ReactFlow>
			{contextMenu && (
				<div
					style={{
						position: 'absolute',
						top: contextMenu.y,
						left: contextMenu.x,
						background: 'white',
						boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
						borderRadius: '4px',
						zIndex: 1000,
					}}
				>
					<button onClick={() => handleAddNode(project({ x: contextMenu.x, y: contextMenu.y }))} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
						Novo Chat
					</button>
				</div>
			)}
		</div>
	)
}

function FlowWithProvider() {
	return (
		<ReactFlowProvider>
			<FlowComponent />
		</ReactFlowProvider>
	)
}

export default function EnhancedFlowChat() {
	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<FlowWithProvider />
		</div>
	)
}
