'use client'

import React, { useCallback, useState, useRef } from 'react'
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
	Node,
	XYPosition,
	EdgeTypes,
	OnConnect,
	MarkerType,
	ConnectionMode,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { ChatNode, ChatNodeData } from '@/components/ChatNode'
import BiDirectionalEdge from '@/components/BiDirectionalEdge'

const nodeTypes: NodeTypes = {
	chatNode: ChatNode,
}

const edgeTypes: EdgeTypes = {
	bidirectional: BiDirectionalEdge,
}

const initialNodes: Node<ChatNodeData>[] = [
	{
		id: `${Date.now()}`,
		type: 'chatNode',
		position: { x: 250, y: 5 },
		data: {
			label: 'Chat',
			sharedContext: [],
			connectedNodes: [],
			updateSharedContext: () => {},
		},
	},
]

const initialEdges: Edge[] = []

export default function FlowComponent() {
	const [nodes, setNodes, onNodesChange] = useNodesState<ChatNodeData>(initialNodes)
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
	const { project } = useReactFlow()
	const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null)
	const sharedContextsRef = useRef<Record<string, Set<string>>>({})

	const onConnect: OnConnect = useCallback(
		(params) => {
			setEdges((eds) => addEdge({ ...params, type: 'bidirectional', markerEnd: { type: MarkerType.ArrowClosed } }, eds))

			setNodes((nds) =>
				nds.map((node) => {
					if (node.id === params.source || node.id === params.target) {
						const connectedNodeId = node.id === params.source ? params.target : params.source
						return {
							...node,
							data: {
								...node.data,
								// @ts-ignore
								connectedNodes: [...new Set([...(node.data.connectedNodes || []), connectedNodeId])],
							},
						}
					}
					return node
				})
			)
		},
		[setEdges, setNodes]
	)

	const updateSharedContext = useCallback(
		(nodeId: string, messages: any[], connectedNodes: string[]) => {
			sharedContextsRef.current[nodeId] = new Set(messages.map((m) => JSON.stringify(m)))

			const mergeContexts = (contexts: Set<string>[]) => {
				const mergedSet = new Set<string>()
				contexts.forEach((context) => {
					context.forEach((item) => mergedSet.add(item))
				})
				return Array.from(mergedSet).map((item) => JSON.parse(item))
			}

			setNodes((nds) =>
				nds.map((node) => {
					if (connectedNodes.includes(node.id)) {
						const connectedContexts = [sharedContextsRef.current[nodeId], ...(node.data.connectedNodes || []).map((id: any) => sharedContextsRef.current[id] || new Set())]
						const mergedContext = mergeContexts(connectedContexts)
						return {
							...node,
							data: {
								...node.data,
								sharedContext: mergedContext,
							},
						}
					}
					return node
				})
			)
		},
		[setNodes]
	)

	const handleAddNode = useCallback(
		(position: XYPosition) => {
			const newNode: Node<ChatNodeData> = {
				id: `${Date.now()}`,
				type: 'chatNode',
				position,
				data: {
					label: 'Chat',
					updateSharedContext,
					sharedContext: [],
					connectedNodes: [],
				},
			}
			setNodes((nds) => nds.concat(newNode))
			setContextMenu(null)
		},
		[setNodes, updateSharedContext]
	)

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
				connectionMode={ConnectionMode.Loose}
				fitView
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
