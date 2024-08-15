import logo from '@/assets/images/logo/logo.svg'
import { CSSProperties } from 'react'

export function Logo({ style }: { style?: CSSProperties }) {
	return (
		<div className="cursor-pointer" style={style}>
			<a href="/">
				<img src={logo} alt="логотип CinemaGuide" />
			</a>
		</div>
	)
}
