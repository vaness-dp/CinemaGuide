import cn from 'clsx'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
	children,
	className,
	type = 'button',
	...rest
}: PropsWithChildren<TypeButton>) {
	return (
		<button
			className={cn(
				{
					'btn-primary': type === 'submit',
					'btn-switch': type === 'button',
				},
				className
			)}
			type={type}
			{...rest}
		>
			{children}
		</button>
	)
}
