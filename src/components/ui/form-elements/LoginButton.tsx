import cn from 'clsx'

import { IButton } from './form.interface'
import styles from './form.module.scss'

export function LoginButton({
	children,
	className,
	onClick,
	...rest
}: IButton) {
	return (
		<button
			onClick={onClick}
			className={cn(styles.button, className)}
			{...rest}
		>
			{children}
		</button>
	)
}
