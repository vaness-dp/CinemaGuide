export function RegisterButton({
	isAuth,
	onClick,
}: {
	isAuth: boolean
	onClick: () => void
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			className="text-lg leading-6 text-black font-bold"
		>
			{isAuth ? 'I have a password' : 'Register'}
		</button>
	)
}
