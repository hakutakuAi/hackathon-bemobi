import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import hljs from 'highlight.js'
import 'highlight.js/styles/stackoverflow-light.css'
import { useMemo } from 'react'

const MemoizedMarkdown = ({ content }) => {
	return useMemo(
		() => (
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				components={{
					a: ({ node, ...props }) => <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
					code: ({ node, className, children, ...props }) => {
						const match = /language-(\w+)/.exec(className || '')
						return match ? (
							<div className="max-w-full overflow-x-auto">
								<pre
									className={`hljs language-${match[1]}`}
									style={{
										background: 'linear-gradient(to right, #f7f7f7, #f0f0f0)',
										borderRadius: '12px',
										padding: '16px',
										margin: '8px 0',
										boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
										maxWidth: '100%',
										whiteSpace: 'pre-wrap',
										overflowWrap: 'break-word',
										wordBreak: 'break-word',
										overflow: 'auto',
									}}
								>
									<code
										dangerouslySetInnerHTML={{
											__html: hljs.highlight(String(children).trim(), {
												language: match[1],
											}).value,
										}}
										{...props}
									/>
								</pre>
							</div>
						) : (
							<code
								className="block"
								{...props}
								style={{
									background: 'linear-gradient(to right, #f7f7f7, #f0f0f0)',
									borderRadius: '12px',
									padding: '8px',
									margin: '8px 0',
									boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
									maxWidth: '100%',
									whiteSpace: 'pre-wrap',
									overflowWrap: 'break-word',
									wordBreak: 'break-word',
									overflow: 'auto',
								}}
							>
								{children}
							</code>
						)
					},
					table: ({ node, ...props }) => <table className="table-auto border-collapse border border-gray-400" style={{ maxWidth: '100%' }} {...props} />,
					thead: ({ node, ...props }) => <thead className="bg-gray-100" {...props} />,
					td: ({ node, ...props }) => <td className="border border-gray-300 px-4 py-2" {...props} />,
					th: ({ node, ...props }) => <th className="border border-gray-300 px-4 py-2" {...props} />,
					ul: ({ node, ...props }) => <ul className="list-disc ml-6" {...props} />,
				}}
			>
				{content}
			</ReactMarkdown>
		),
		[content]
	)
}

export default MemoizedMarkdown
