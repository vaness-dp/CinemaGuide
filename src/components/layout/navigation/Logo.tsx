import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties } from 'react'

import logo from '@/assets/images/logo/logo.svg'

export function Logo({ style }: { style?: CSSProperties }) {
	return (
		<div className="cursor-pointer" style={style}>
			<Link href="/">
				<Image src={logo} alt="logo CinemaGuide" />
			</Link>
		</div>
	)
}
