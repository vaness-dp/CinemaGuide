import { ReactNode } from 'react'

export function Button({
	onClick,
	children,
	disabled,
}: {
	onClick: () => void
	children: ReactNode
	disabled?: boolean
}) {
	return (
		<button type="button" onClick={onClick} disabled={disabled} className="btn-primary">
			{children}
		</button>
	)
}
