import { CSSProperties } from 'react'

import { Logo } from '../navigation/Logo'
import { Navigation } from '../navigation/Navigation'

import styles from './Header.module.scss'

export function Header({ style }: { style?: CSSProperties }) {
	return (
		<header className={styles.header} style={style}>
			<div className="container">
				<Logo className="mr-[73px]" />
				<Navigation />
			</div>
		</header>
	)
}
