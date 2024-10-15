'use client'

import { ReactNode } from 'react'
import { ReactFlow, Background, Controls, MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import AsideMenu from '@/components/BoardSideBar';

export default function BoardLayout({ children }: { children: ReactNode }) {
  return (
      <div className='w-screen h-screen flex flex-row'>
           <AsideMenu/>
              {children}
    </div>
  )
}

