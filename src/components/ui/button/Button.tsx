import { ReactNode } from 'react'

export function Button({
	onClick,
	children,
}: {
	onClick: () => void
	children: ReactNode
}) {
	return (
		<button type="button" onClick={onClick} className="btn-primary">
			{children}
		</button>
	)
}
