'use client'

import React, { useState } from 'react'
import useSWR from 'swr'
import Sidebar from '@/components/Sidebar'
import DotPattern from '@/components/ui/dot-pattern'
import { cn } from '@/lib/utils'
import AnimatedConnections from '@/components/AnimatedConnections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import HakutakuIcon from '@/assets/HKTK-R02_AVATAR-FACE-01.png'
import NumberTicker from '@/components/ui/number-ticker'
import { Tooltip } from '@nextui-org/react'
import { Check, Loader2 } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
import { Skeleton } from '@/components/ui/skeleton'

export default function Admin() {
	const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

	const fetcher = (url: string) => fetch(url).then((res) => res.json())
	const { data, error, mutate, isLoading } = useSWR('/api/integrations/infos', fetcher, {
		refreshInterval: 30000,
		revalidateOnFocus: true,
	})

	const searchCount = data?.qdrant?.requests?.rest?.responses['POST /collections/{name}/points/search']['200']?.count || 0
	const chatCount = data?.chatCount || 0
	const missingInfo = data?.missingInformation || []
	const vectorPoints = data?.vectorCount || 0

	const getMissingInfoColor = (count: number) => {
		if (count <= 5) return 'bg-green-500'
		if (count <= 10) return 'bg-yellow-500'
		return 'bg-red-500'
	}

	const getMissingInfoTooltip = (count: number) => {
		if (count <= 5) return 'Ótimo: 0-5 itens'
		if (count <= 10) return 'Atenção: 6-10 itens'
		return 'Crítico: 11+ itens'
	}

	const handleSolve = async (index: number) => {
		try {
			const response = await fetch('/api/integrations/solve-missing-info', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ index }),
			})

			if (response.ok) {
				mutate()
				toast.success('Item solucionado com sucesso!')
			} else {
				console.error('Failed to solve missing info')
				toast.error('Erro ao solucionar item')
			}
		} catch (error) {
			console.error('Error solving missing info:', error)
			toast.error('Erro ao solucionar item')
		}
	}

	return (
		<div className="relative flex min-h-screen bg-[#EDE9E2] font-sans overflow-hidden">
			<Toaster position="top-right" />
			<div className="absolute inset-0 z-0 overflow-hidden">
				<DotPattern width={20} height={20} cx={1} cy={1} cr={1} className={cn('[mask-image:linear-gradient(to_bottom_right,white,rgba(255,255,255,0.6))]', 'opacity-60')} />
			</div>
			<Sidebar onExpand={setIsSidebarExpanded} />
			<main className={cn('flex-1 flex flex-col relative z-10 overflow-hidden transition-all duration-300', 'w-full', 'md:ml-16', isSidebarExpanded ? 'md:ml-60' : 'md:ml-16', 'pt-16 md:pt-0')}>
				<div className="flex-1 p-4 md:p-6 lg:p-10 overflow-auto">
					<h1 className="text-2xl md:text-3xl font-bold mb-6">Administração</h1>
					<AnimatedConnections />
					<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 mt-8">
						<Card>
							<CardHeader>
								<CardTitle>Buscas feitas</CardTitle>
							</CardHeader>
							<CardContent>
								{isLoading ? <Skeleton className="h-8 w-24" /> : <NumberTicker className="text-2xl md:text-3xl font-bold" value={searchCount} decimalPlaces={0} />}
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Chats iniciados</CardTitle>
							</CardHeader>
							<CardContent>{isLoading ? <Skeleton className="h-8 w-24" /> : <NumberTicker className="text-2xl md:text-3xl font-bold" value={chatCount} decimalPlaces={0} />}</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Pontos vetorizados</CardTitle>
							</CardHeader>
							<CardContent>
								{isLoading ? <Skeleton className="h-8 w-24" /> : <NumberTicker className="text-2xl md:text-3xl font-bold" value={vectorPoints} decimalPlaces={0} />}
							</CardContent>
						</Card>
					</section>
					<section className="mb-8">
						<div className="flex justify-between items-center mb-4">
							<h2 className="text-xl md:text-2xl font-semibold">Dados em falta</h2>
							<Card className="w-auto">
								<CardContent className="p-2 flex items-center space-x-2">
									{isLoading ? (
										<Skeleton className="w-5 h-5 rounded-full" />
									) : (
										<Tooltip content={getMissingInfoTooltip(missingInfo.length)}>
											<span className={`w-5 h-5 rounded-full ${getMissingInfoColor(missingInfo.length)} cursor-help`}></span>
										</Tooltip>
									)}
									{isLoading ? <Skeleton className="h-6 w-8" /> : <NumberTicker className="text-lg md:text-xl font-bold" value={missingInfo.length} decimalPlaces={0} />}
								</CardContent>
							</Card>
						</div>
						<Card>
							<CardContent className="p-0">
								{isLoading ? (
									<div className="p-4 space-y-4">
										{[...Array(3)].map((_, index) => (
											<div key={index} className="flex items-center space-x-4">
												<Skeleton className="h-8 w-8 rounded-full" />
												<div className="space-y-2 flex-1">
													<Skeleton className="h-4 w-3/4" />
													<Skeleton className="h-3 w-1/2" />
												</div>
												<Skeleton className="h-8 w-24" />
											</div>
										))}
									</div>
								) : missingInfo.length > 0 ? (
									<ul className="divide-y divide-gray-200">
										{missingInfo.map((info: string, index: number) => {
											const missingInfo = info.split('\n')[1].replace('Missing: ', '')
											return (
												<li key={index} className="p-4 hover:bg-gray-50">
													<div className="flex items-center space-x-4">
														<div className="flex-shrink-0">
															<Image src={HakutakuIcon} alt="Hakutaku" width={32} height={32} className="rounded-full" />
														</div>
														<div className="flex-1 min-w-0">
															<p className="text-sm font-medium text-gray-900">{missingInfo}</p>
															<p className="text-xs text-gray-500">Reportado por: Hakutaku (hakutaku@hakutaku.co)</p>
														</div>
														<div>
															<Button variant="outline" size="sm" onClick={() => handleSolve(index)} className="flex items-center space-x-1">
																<Check className="w-4 h-4" />
																<span>Solucionado</span>
															</Button>
														</div>
													</div>
												</li>
											)
										})}
									</ul>
								) : (
									<div className="p-4 text-center">
										<p className="text-lg font-medium text-gray-900">Uau! Parece que estamos em dia! 🎉</p>
										<p className="text-sm text-gray-500 mt-2">
											Não há informações faltantes no momento. Nosso banco de dados está mais completo que a coleção de memes de um adolescente!
										</p>
									</div>
								)}
							</CardContent>
						</Card>
					</section>
				</div>
			</main>
		</div>
	)
}
