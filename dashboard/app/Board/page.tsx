'use client'

import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import { Button } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ReactFlow, Background, Controls, MiniMap, useNodesState, useEdgesState, addEdge, Connection, Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import TextNode from '@/components/TextNode';

const initialNodes = [
  {
    id: '1',
    type: 'textNode',  // Definindo o tipo customizado de nó
    position: { x: 250, y: 5 },  // Posição inicial do nó
    data: { text: 'Arraste-me!' },
  },
];

const initialEdges: Edge[] = [];

const nodeTypes = {
  textNode: TextNode,
};

export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds));

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        // edges={edges}
        onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        nodeTypes={nodeTypes}  // Aqui incluímos o nodeTypes
        fitView
      >
        {/* Background do React Flow */}
        <Background color="#B24128" gap={16} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
