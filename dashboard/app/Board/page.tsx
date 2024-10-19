'use client';

import { useEffect } from 'react';
import { ReactFlow, Background, Controls, MiniMap, useNodesState, useEdgesState, addEdge, Connection, Edge, ReactFlowProvider, useReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import TextNode from '@/components/TextNode';
import cursor from "@/assets/logo.svg";

const initialNodes = [
  {
    id: '1',
    type: 'textNode',
    position: { x: 250, y: 5 },
    data: { text: 'Arraste-me!' },
  },
];

const initialEdges: Edge[] = [];

const nodeTypes = {
  textNode: TextNode,
};

function FlowComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const { screenToFlowPosition } = useReactFlow();

  const handleAddNode = (clientX: number, clientY: number) => {
    const { x, y } = screenToFlowPosition({ x: clientX, y: clientY });

    const newNode = {
      id: `${nodes.length + 1}`,
      type: 'textNode',
      position: { x, y },
      data: { text: `Card ${nodes.length + 1}` },
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const reactFlowElement = document.querySelector('.react-flow');

      // Verifica se o clique foi feito no espaço vazio (não em um nó)
      const isNodeClicked = (event.target as HTMLElement).closest('.react-flow__node');

      if (reactFlowElement && reactFlowElement.contains(event.target as Node) && !isNodeClicked) {
        handleAddNode(event.clientX, event.clientY); 
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [nodes]);

  const onConnect = (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds));

  return (
    <ReactFlow
      style={{
        cursor: `url(${cursor}), auto`,
      }}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      className="react-flow"
    >
      <Background color="#B24128" gap={16} />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
}

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlowProvider>
        <FlowComponent />
      </ReactFlowProvider>
    </div>
  );
}
