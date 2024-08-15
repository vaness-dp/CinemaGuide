interface IButton {
	onClick: () => void
}

export function LoginButton({ onClick }: IButton) {
	return (
		<button className="menu-item py-2" onClick={onClick}>
			Login
		</button>
	)
}
