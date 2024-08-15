import cn from 'clsx'

import { MaterialIcon } from '@/components/ui/icons/MaterialIcon'

import styles from '../Hero.module.scss'

export function RefreshButton() {
	return (
		<button className={cn(styles.refresh, 'btn-icon')}>
			<MaterialIcon name="MdRefresh" />
		</button>
	)
}
