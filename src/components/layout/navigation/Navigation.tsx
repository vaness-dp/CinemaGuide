import { Menu } from './menu/Menu'
import styles from './Navigation.module.scss'

export function Navigation() {
	return (
		<nav className={styles.navigation}>
			<Menu />
		</nav>
	)
}
