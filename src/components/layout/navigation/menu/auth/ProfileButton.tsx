import { IButton } from './button.types'

export function ProfileButton({ onClick, children }: IButton) {
	return (
		<button className="menu-item py-2" onClick={onClick}>
			{children}
		</button>
	)
}
