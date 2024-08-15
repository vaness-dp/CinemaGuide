import cn from 'clsx'
import { Heart } from 'lucide-react'

import styles from '../Hero.module.scss'

export function HeartButton() {
	return (
		<button className={cn('btn-icon', styles.heart)}>
			<Heart />
		</button>
	)
}
