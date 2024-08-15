export interface IAuth {
	onClose: () => void
}

export interface IAuthForm {
	email: string
	password: string
	name?: string
	surname?: string
}
