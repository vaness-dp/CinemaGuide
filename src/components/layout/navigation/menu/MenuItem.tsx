'use client'

import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { IMenuItem } from './menu.interface'

export function MenuItem({ item }: { item: IMenuItem }) {
	const pathname = usePathname()
	const isActive = pathname === item.link

	return (
		<li>
			<Link
				href={item.link}
				className={cn('menu-item mr-10', { 'link-underline': isActive })}
			>
				{item.title}
			</Link>
		</li>
	)
}
