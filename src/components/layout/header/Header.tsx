import { Logo } from '../navigation/Logo'
import { Navigation } from '../navigation/Navigation'
import styles from './Header.module.scss'

export function Header() {
	return (
		<header className={styles.header}>
			<div className="container">
				<Logo style={{ marginRight: '73px' }} />
				<Navigation />
			</div>
		</header>
	)
}
