'use client'

import { useState, useEffect } from 'react'
import { useChat } from 'ai/react'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import openBar from '@/assets/openBar.svg'
import Send from '@/assets/icons/send'
import Logo from '@/assets/logo.svg'
import userIcon from '@/assets/Avatar.svg'
import chatIcon from '@/assets/HKTK-R02_AVATAR-FACE-01.png'
import chatIconThinking from '@/assets/HKTK-R02_AVATAR-FACE-BUSCA.png'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { cn } from '@/lib/utils'
import { DotPattern } from '@/components/ui/dot-pattern'

const loadingMessages = ['Pensando com carinho...', 'Colocando as ideias no lugar...', 'Consultando minha bola de cristal...', 'Fazendo mágica nos bastidores...']

const getRandomLoadingMessage = () => loadingMessages[Math.floor(Math.random() * loadingMessages.length)]

const Chat = () => {
	const { messages, input, handleInputChange, handleSubmit } = useChat()
	const [displayMessages, setDisplayMessages] = useState([])

	useEffect(() => {
		const processedMessages = messages.reduce((acc, message, index) => {
			if (message.role === 'assistant' && message.content === '' && message.toolInvocations) {
				const nextMessage = messages[index + 1]
				if (!nextMessage || nextMessage.role !== 'assistant' || nextMessage.content === '') {
					acc.push({
						...message,
						isLoading: true,
						loadingMessage: getRandomLoadingMessage(),
						toolName: message.toolInvocations[0].toolName,
					})
				}
			} else {
				acc.push(message)
			}
			return acc
		}, [])

		if (JSON.stringify(processedMessages) !== JSON.stringify(displayMessages)) {
			setDisplayMessages(processedMessages)
		}
	}, [messages, displayMessages])

	return (
		<div className="chat-container flex flex-col h-full w-full max-w-screen-md mx-auto px-4">
			<div className="flex-1 overflow-y-auto mt-2 space-y-4">
				{' '}
				{}
				{displayMessages.map((m, index) => (
					<div key={m.id} className={`message ${m.role === 'user' ? 'self-end' : 'self-start'} flex mb-4 items-start max-w-full`}>
						{m.role === 'assistant' && <Image src={m.isLoading ? chatIconThinking : chatIcon} alt="Chat Icon" width={64} height={64} className="mr-2" />}
						<div
							className={`p-4 rounded-xl max-w-full break-words shadow-md ${
								m.role === 'user' ? 'bg-[#D5CCC9] text-black rounded-3xl ml-auto' : 'bg-gradient-to-r from-[#F0F0F0] to-[#EDEDED] text-black rounded-3xl mr-auto'
							}`}
							style={{
								overflowWrap: 'break-word',
								wordWrap: 'break-word',
								wordBreak: 'break-word',
								fontSize: '1rem',
								lineHeight: '1.5',
								padding: '16px',
								boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
							}}
						>
							{m.isLoading ? (
								<span className="italic">{m.loadingMessage}</span>
							) : (
								<ReactMarkdown
									remarkPlugins={[remarkGfm]}
									components={{
										a: ({ node, ...props }) => <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
										code: ({ node, className, children, ...props }) => {
											const match = /language-(\w+)/.exec(className || '')
											return match ? (
												<div className="max-w-full overflow-x-auto">
													<SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" {...props}>
														{String(children).replace(/\n$/, '')}
													</SyntaxHighlighter>
												</div>
											) : (
												<code className={`block bg-gray-100 p-2 rounded`} {...props}>
													{children}
												</code>
											)
										},
										table: ({ node, ...props }) => <table className="table-auto border-collapse border border-gray-400" {...props} />,
										thead: ({ node, ...props }) => <thead className="bg-gray-100" {...props} />,
										td: ({ node, ...props }) => <td className="border border-gray-300 px-4 py-2" {...props} />,
										th: ({ node, ...props }) => <th className="border border-gray-300 px-4 py-2" {...props} />,
										ul: ({ node, ...props }) => <ul className="list-disc ml-6" {...props} />,
									}}
								>
									{m.content}
								</ReactMarkdown>
							)}
						</div>
						{m.role === 'user' && <Image src={userIcon} alt="User Icon" width={50} height={50} className="ml-2" />}
					</div>
				))}
			</div>
			<form onSubmit={handleSubmit} className="flex w-full bg-[#F5F5F5] border border-[#FF791F] rounded-full shadow-lg p-2 items-center">
				<input
					value={input}
					onChange={handleInputChange}
					placeholder="Compartilhe seus pensamentos mágicos..."
					className="flex-1 p-4 rounded-full text-black bg-[#FDFDFD] focus:outline-none focus:ring-2 focus:ring-[#FF791F] placeholder-gray-500 transition duration-300 ease-in-out"
					style={{
						border: '1px solid #E0E0E0',
						boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
						fontFamily: 'var(--font-geist-sans)',
						fontSize: '1rem',
					}}
				/>
				<button
					type="submit"
					className="p-3 bg-gradient-to-r from-[#FF791F] to-[#FF5300] text-white rounded-full shadow-md hover:from-[#FF5A00] hover:to-[#FF3200] transition-all duration-300 flex items-center justify-center"
					style={{
						width: '48px',
						height: '48px',
					}}
				>
					<Send />
				</button>
			</form>
		</div>
	)
}

const Home = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleSidebar = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className="relative flex min-h-screen bg-[#EDE9E2] font-[family-name:var(--font-geist-sans)]">
			<div className="absolute inset-0 z-0 overflow-hidden">
				<DotPattern width={20} height={20} cx={1} cy={1} cr={1} className={cn('[mask-image:linear-gradient(to_bottom_right,white,rgba(255,255,255,0.6))]', 'opacity-60')} />
			</div>

			{!isOpen && (
				<div className="fixed top-4 left-4 z-20 flex items-center">
					<button className="p-2 text-black rounded" onClick={toggleSidebar}>
						<div className="flex flex-row">
							<Image src={openBar} alt="Abrir Menu" width={24} height={24} />
							<Image src={Logo} alt="Logo" width={70} height={70} />
						</div>
					</button>
				</div>
			)}

			<Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

			<main className={`flex-1 p-10 w-full transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'} flex flex-col relative z-10`}>
				<div className="flex flex-col h-full justify-between">
					<Chat />
				</div>
			</main>
		</div>
	)
}

export default Home
