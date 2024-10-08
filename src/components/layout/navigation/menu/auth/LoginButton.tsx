import { IButton } from './button.types'

export function LoginButton({ onClick }: IButton) {
	return (
		<button className="menu-item py-2" onClick={onClick}>
			Login
		</button>
	)
}
