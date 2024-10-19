'use client'

import { useChat } from 'ai/react'
import { FaStop } from 'react-icons/fa'
import userIcon from '@/assets/Avatar.svg'
import chatIcon from '@/assets/HKTK-R02_AVATAR-FACE-01.png'
import chatIconThinking from '@/assets/HKTK-R02_AVATAR-FACE-BUSCA.png'
import MemoizedMarkdown from '@/components/MemoizedMarkdown'
import { useMemo, useEffect, useState } from 'react'
import Image from 'next/image'
import { GrSend } from 'react-icons/gr'

const loadingMessages = ['Pensando com carinho...', 'Colocando as ideias no lugar...', 'Consultando minha bola de cristal...', 'Fazendo mágica nos bastidores...']

const getRandomLoadingMessage = () => loadingMessages[Math.floor(Math.random() * loadingMessages.length)]

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit, isLoading, stop } = useChat()
	const [showScrollButton, setShowScrollButton] = useState(false)
	const [userScrolled, setUserScrolled] = useState(false)

	const displayMessages = useMemo(() => {
		return messages.reduce((acc: any[], message, index) => {
			if (message.role === 'assistant') {
				const lastMessage = acc[acc.length - 1]
				if (lastMessage && lastMessage.role === 'assistant') {
					if (message.content) {
						lastMessage.content = message.content
						lastMessage.isLoading = false
					} else if (message.toolInvocations) {
						lastMessage.isLoading = true
						lastMessage.loadingMessage = getRandomLoadingMessage()
					}
				} else {
					acc.push({
						...message,
						isLoading: !message.content,
						loadingMessage: !message.content ? getRandomLoadingMessage() : null,
					})
				}
			} else {
				acc.push(message)
			}
			return acc
		}, [])
	}, [messages])

	const checkIfUserAtBottom = () => {
		const scrollContainer = document.documentElement
		const isAtBottom = scrollContainer.scrollHeight - scrollContainer.scrollTop <= scrollContainer.clientHeight + 100
		setShowScrollButton(!isAtBottom)
		setUserScrolled(!isAtBottom)
	}

	useEffect(() => {
		window.addEventListener('scroll', checkIfUserAtBottom)
		return () => window.removeEventListener('scroll', checkIfUserAtBottom)
	}, [])

	useEffect(() => {
		const scrollToBottom = () => {
			if (!userScrolled) {
				window.scrollTo({
					top: document.documentElement.scrollHeight,
					behavior: 'smooth',
				})
			}
		}

		scrollToBottom()
		checkIfUserAtBottom()
	}, [messages, userScrolled])

	const handleScrollToBottom = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth',
		})
		setShowScrollButton(false)
		setUserScrolled(false)
	}

	const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		handleSubmit(e)
		setUserScrolled(false)
		setTimeout(() => {
			handleScrollToBottom()
		}, 100)
	}

	return (
		<div className="chat-container flex flex-col min-h-screen w-full">
			<div className="flex-1 w-full max-w-3xl mx-auto px-4 pt-20 pb-32 md:pt-24 md:pb-36">
				{displayMessages.map((m) => (
					<div key={m.id} className={`message ${m.role === 'user' ? 'self-end' : 'self-start'} flex mb-4 items-start max-w-full`}>
						{m.role === 'assistant' && <Image src={m.isLoading ? chatIconThinking : chatIcon} alt="Chat Icon" className="mr-2 md:w-16 md:h-16" />}
						<div
							className={`p-3 md:p-4 rounded-xl max-w-[calc(100%-48px)] md:max-w-[calc(100%-80px)] break-words shadow-md ${
								m.role === 'user' ? 'bg-[#D5CCC9] text-black rounded-3xl ml-auto' : 'bg-gradient-to-r from-[#F0F0F0] to-[#EDEDED] text-black rounded-3xl mr-auto'
							}`}
							style={{
								overflowWrap: 'break-word',
								wordWrap: 'break-word',
								wordBreak: 'break-word',
								fontSize: '0.875rem',
								lineHeight: '1.5',
								boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
								whiteSpace: 'normal',
							}}
						>
							{m.isLoading ? <span className="italic">{m.loadingMessage}</span> : <MemoizedMarkdown content={m.content} />}
						</div>
						{m.role === 'user' && <Image src={userIcon} alt="User Icon" width={32} height={32} className="ml-2 md:w-12 md:h-12" />}
					</div>
				))}
			</div>

			{showScrollButton && (
				<button
					onClick={handleScrollToBottom}
					className="fixed bottom-20 md:bottom-24 right-4 md:right-6 bg-[#FF791F] p-2 md:p-3 rounded-full shadow-lg text-white hover:bg-[#FF5300] transition-all duration-300 z-20"
					aria-label="Scroll to bottom"
				>
					&#x2193;
				</button>
			)}

			<form onSubmit={onFormSubmit} className="fixed bottom-4 md:bottom-8 left-0 right-0 z-10 mx-auto max-w-3xl px-4">
				<div className={`flex w-full bg-[#F5F5F5] border border-[#FF791F] rounded-full shadow-lg p-1 md:p-2 items-center ${isLoading ? 'opacity-50' : ''}`}>
					<input
						value={input}
						onChange={handleInputChange}
						placeholder={isLoading ? 'Aguarde a resposta...' : 'Compartilhe seus pensamentos...'}
						disabled={isLoading}
						className={`flex-1 p-2 md:p-4 rounded-full text-black bg-[#FDFDFD] focus:outline-none placeholder-gray-500 transition duration-300 ease-in-out text-sm md:text-base ${
							isLoading ? 'cursor-not-allowed' : ''
						}`}
						style={{
							border: '1px solid #E0E0E0',
							boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
							fontFamily: 'var(--font-geist-sans)',
							maxWidth: '100%',
						}}
					/>
					{isLoading ? (
						<button
							onClick={stop}
							className="p-2 md:p-3 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-all duration-300 flex items-center justify-center"
							style={{
								width: '36px',
								height: '36px',
							}}
						>
							<FaStop size={16} />
						</button>
					) : (
						<button
							type="submit"
							disabled={isLoading}
							className={`p-2 md:p-3 bg-gradient-to-r from-[#FF791F] to-[#FF5300] text-white rounded-full shadow-md hover:from-[#FF5A00] hover:to-[#FF3200] transition-all duration-300 flex items-center justify-center ${
								isLoading ? 'opacity-50 cursor-not-allowed' : ''
							}`}
							style={{
								width: '36px',
								height: '36px',
							}}
						>
							<GrSend size={16} />
						</button>
					)}
				</div>
			</form>
		</div>
	)
}
