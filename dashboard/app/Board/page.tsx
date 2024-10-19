'use client'

import React from 'react'
import { ReactFlowProvider } from 'reactflow'
import FlowComponent from '@/components/FlowComponent'

export default function Board() {
	return (
		<ReactFlowProvider>
			<FlowComponent />
		</ReactFlowProvider>
	)
}
