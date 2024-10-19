'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronRight, LogOut, Settings, User, MessageCircle, HelpCircle, Cog, Menu, X } from 'lucide-react'
import Logo from '@/assets/logo.svg'
import HakutakuIcon from '@/assets/HKTK-R02_AVATAR-FACE-01.png'

const menuItems = [
	{ href: '/Chat', icon: MessageCircle, label: 'Chat' },
	{ href: '/Board', icon: HelpCircle, label: 'Board' },
	{ href: '/Admin', icon: Cog, label: 'Admin' },
]

export default function Sidebar({ onExpand }: { onExpand?: (expanded: boolean) => void }) {
	const [isExpanded, setIsExpanded] = React.useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
	const pathname = usePathname()

	const toggleSidebar = () => {
		setIsExpanded(!isExpanded)
		onExpand?.(!isExpanded)
	}

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	return (
		<>
			<Button
				variant="ghost"
				size="icon"
				onClick={toggleMobileMenu}
				className={cn(
					'fixed top-4 left-4 z-50 md:hidden text-white bg-[#B24128] hover:bg-[#C25138] transition-opacity duration-300',
					isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
				)}
			>
				<Menu className="h-6 w-6" />
			</Button>

			<motion.aside
				initial={false}
				animate={{ width: isExpanded ? '240px' : '64px' }}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
				className="fixed top-0 left-0 z-40 h-screen bg-[#B24128] text-white shadow-xl overflow-hidden hidden md:block"
			>
				<SidebarContent isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
			</motion.aside>

			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.aside
						initial={{ x: '-100%' }}
						animate={{ x: 0 }}
						exit={{ x: '-100%' }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						className="fixed top-0 left-0 z-40 h-screen w-64 bg-[#B24128] text-white shadow-xl overflow-hidden md:hidden"
					>
						<SidebarContent isExpanded={true} toggleSidebar={toggleMobileMenu} isMobile={true} />
					</motion.aside>
				)}
			</AnimatePresence>

			{isMobileMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={toggleMobileMenu} />}
		</>
	)
}

function SidebarContent({ isExpanded, toggleSidebar, isMobile = false }: { isExpanded: boolean; toggleSidebar: () => void; isMobile?: boolean }) {
	const pathname = usePathname()

	return (
		<div className="flex h-full flex-col">
			<div className="flex items-center justify-between p-4">
				<Link href="/" className="flex items-center space-x-2">
					<Image src={Logo} alt="Logo" width={isExpanded ? 40 : 32} height={isExpanded ? 40 : 32} />
					{isExpanded && <span className="text-xl font-bold">Hakutaku</span>}
				</Link>
				<Button variant="ghost" size="icon" onClick={toggleSidebar} className={cn('text-white hover:bg-[#C25138]', isMobile ? 'flex' : 'md:flex hidden')}>
					{isMobile ? <X className="h-6 w-6" /> : <ChevronRight className={cn('h-6 w-6 transition-transform', isExpanded && 'rotate-180')} />}
				</Button>
			</div>

			<ScrollArea className="flex-grow px-3">
				<nav className="space-y-2 py-4">
					{menuItems.map((item) => {
						const Icon = item.icon
						return (
							<TooltipProvider key={item.href}>
								<Tooltip>
									<TooltipTrigger asChild>
										<Link
											href={item.href}
											className={cn(
												'flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
												pathname === item.href ? 'bg-[#C25138] text-white' : 'text-gray-200 hover:bg-[#C25138] hover:text-white',
												!isExpanded && 'justify-center'
											)}
										>
											<Icon className="h-5 w-5" />
											{isExpanded && <span>{item.label}</span>}
										</Link>
									</TooltipTrigger>
									<TooltipContent side="right">
										<p>{item.label}</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						)
					})}
				</nav>
			</ScrollArea>

			<div className="mt-auto p-4">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className={cn('w-full justify-start text-left font-normal', !isExpanded && 'justify-center')}>
							<Avatar className="h-8 w-8">
								<AvatarImage src={HakutakuIcon.src} alt="Hakutaku" />
								<AvatarFallback>VL</AvatarFallback>
							</Avatar>
							{isExpanded && <span className="ml-2">Vinicios Lugli</span>}
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56" align="end" forceMount>
						<DropdownMenuLabel className="font-normal">
							<div className="flex flex-col space-y-1">
								<p className="text-sm font-medium leading-none">Vinicios Lugli</p>
								<p className="text-xs leading-none text-muted-foreground">vinicioslugli@gmail.com</p>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<User className="mr-2 h-4 w-4" />
							<span>Perfil</span>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Settings className="mr-2 h-4 w-4" />
							<span>Configurações</span>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<LogOut className="mr-2 h-4 w-4" />
							<span>Sair</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	)
}
