import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/images/logo/logo.svg'

export function Logo({ className }: { className?: string }) {
	return (
		<div className={cn('cursor-pointer', `${className}`)}>
			<Link href="/">
				<Image src={logo} alt="logo CinemaGuide" />
			</Link>
		</div>
	)
}
