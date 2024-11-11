'use client'

import { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import { Handle, Position, NodeProps, useReactFlow } from 'reactflow'
import { useChat } from 'ai/react'
import Image from 'next/image'
import { GrSend } from 'react-icons/gr'
import { FaStop, FaTrash, FaExpandAlt, FaCompressAlt } from 'react-icons/fa'
import MemoizedMarkdown from '@/components/MemoizedMarkdown'
import userIcon from '@/assets/Avatar.svg'
import chatIcon from '@/assets/HKTK-R02_AVATAR-FACE-01.png'
import chatIconThinking from '@/assets/HKTK-R02_AVATAR-FACE-BUSCA.png'
import { useTranslation } from 'react-i18next'

const loadingMessages = [
  'loading.thinking', 
  'loading.organizingThoughts', 
  'loading.consultingCrystalBall', 
  'loading.performingMagic'
]

const getRandomLoadingMessage = (t: any) => t(loadingMessages[Math.floor(Math.random() * loadingMessages.length)])

export interface ChatNodeData {
  label: string
  updateSharedContext: (nodeId: string, messages: any[], connectedNodes: string[]) => void
  sharedContext: any[]
  connectedNodes: string[]
}

export function ChatNode({ id, data, selected }: NodeProps<ChatNodeData>) {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } = useChat({
    id: id,
    initialMessages: data.sharedContext || [],
    body: {
      nodeId: id,
      connectedNodes: data.connectedNodes || [],
    },
  })
  const { deleteElements, getNode, getEdges } = useReactFlow()
  const inputRef = useRef<HTMLInputElement>(null)

  const toggleExpand = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()
    setIsExpanded((prev) => !prev)
  }, [])

  const handleDelete = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation()
      deleteElements({ nodes: [{ id }] })
    },
    [deleteElements, id]
  )

  const handleMinimizedClick = useCallback(() => {
    if (!isExpanded) {
      setIsExpanded(true)
    }
  }, [isExpanded])

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isExpanded])

  useEffect(() => {
    const connectedEdges = getEdges().filter((edge) => edge.source === id || edge.target === id)
    const connectedNodes = connectedEdges.map((edge) => (edge.source === id ? edge.target : edge.source))

    data.updateSharedContext(id, messages, connectedNodes)
  }, [messages, id, data, getEdges])

  const displayMessages = useMemo(() => {
    return messages.reduce((acc: any[], message, index) => {
      if (message.role === 'assistant') {
        const lastMessage = acc[acc.length - 1]
        if (lastMessage && lastMessage.role === 'assistant') {
          if (message.content) {
            lastMessage.content = message.content
            lastMessage.isLoading = false
          } else {
            lastMessage.isLoading = true
            lastMessage.loadingMessage = getRandomLoadingMessage(t)
          }
        } else {
          acc.push({
            ...message,
            isLoading: !message.content,
            loadingMessage: !message.content ? getRandomLoadingMessage(t) : null,
          })
        }
      } else {
        acc.push(message)
      }
      return acc
    }, [])
  }, [messages, t])

  const lastMessage = useMemo(() => {
    if (displayMessages.length === 0) return 'there are no messages yet'
    const content = displayMessages[displayMessages.length - 1].content
    return content.length > 30 ? content.slice(0, 29) + '...' : content
  }, [displayMessages, t])

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(e)
  }

  return (
    <div
      className={`bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${selected ? 'ring-2 ring-[#FF791F]' : ''}`}
      style={{
        width: isExpanded ? '400px' : '250px',
        height: isExpanded ? '400px' : '80px',
      }}
      onClick={handleMinimizedClick}
    >
      <Handle type="source" id="top" position={Position.Top} style={{ background: '#FF791F', width: '10px', height: '10px' }} />
      <Handle type="source" id="right" position={Position.Right} style={{ background: '#FF791F', width: '10px', height: '10px' }} />
      <Handle type="source" id="bottom" position={Position.Bottom} style={{ background: '#FF791F', width: '10px', height: '10px' }} />
      <Handle type="source" id="left" position={Position.Left} style={{ background: '#FF791F', width: '10px', height: '10px' }} />

      <div className="bg-gradient-to-r from-[#FF791F] to-[#FF5300] p-3 flex justify-between items-center cursor-pointer" onClick={toggleExpand}>
        <span className="text-white font-semibold truncate">{data.label}</span>
        <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
          <button onClick={toggleExpand} className="text-white hover:text-gray-200 transition-colors">
            {isExpanded ? <FaCompressAlt size={16} /> : <FaExpandAlt size={16} />}
          </button>
          <button onClick={handleDelete} className="text-white hover:text-gray-200 transition-colors">
            <FaTrash size={16} />
          </button>
        </div>
      </div>
      {isExpanded ? (
        <div className="flex flex-col h-[calc(100%-56px)]" onClick={(e) => e.stopPropagation()}>
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {displayMessages.map((m, index) => (
              <div key={index} className={`flex items-start space-x-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.role === 'assistant' && <Image src={m.isLoading ? chatIconThinking : chatIcon} alt={t('chatIcon')} width={24} height={24} />}
                <div className={`p-2 rounded-lg max-w-[80%] ${m.role === 'user' ? 'bg-[#D5CCC9] text-black' : 'bg-gradient-to-r from-[#F0F0F0] to-[#EDEDED] text-black'}`}>
                  {m.isLoading ? <span className="italic">{m.loadingMessage}</span> : <MemoizedMarkdown content={m.content} />}
                </div>
                {m.role === 'user' && <Image src={userIcon} alt={t('userIcon')} width={24} height={24} />}
              </div>
            ))}
          </div>
          <form onSubmit={onFormSubmit} className="p-3">
            <div className={`flex w-full bg-[#F5F5F5] border border-[#FF791F] rounded-full shadow-sm p-1 items-center ${isLoading ? 'opacity-50' : ''}`}>
              <input
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                placeholder={isLoading ? 'Loading response...' : 'type your message...'}
                disabled={isLoading}
                className="flex-1 p-2 rounded-full text-black bg-[#FDFDFD] focus:outline-none placeholder-gray-500 transition duration-300 ease-in-out text-sm"
              />
              {isLoading ? (
                <button onClick={stop} className="p-2 bg-red-500 text-white rounded-full shadow-sm hover:bg-red-600 transition-all duration-300 flex items-center justify-center">
                  <FaStop size={12} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="p-2 bg-gradient-to-r from-[#FF791F] to-[#FF5300] text-white rounded-full shadow-sm hover:from-[#FF5A00] hover:to-[#FF3200] transition-all duration-300 flex items-center justify-center"
                >
                  <GrSend size={12} />
                </button>
              )}
            </div>
          </form>
        </div>
      ) : (
        <div className="p-3 flex items-center justify-between">
          <span className="text-gray-500 text-sm truncate">{lastMessage}</span>
        </div>
      )}
    </div>
  )
}
