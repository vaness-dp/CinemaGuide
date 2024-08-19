import { FieldValues, FormState, UseFormRegister } from 'react-hook-form'

export interface IAuthModal {
	onClose: () => void
	isPasswordRequired?: boolean
}

export interface IAuthForm {
	isAuth: boolean
	onSuccess: (data: any) => void
	onError: (error: any) => void
}

export interface IAuthToggle {
	isAuth: boolean
	toggleForm: () => void
}

export interface IFormFields<T extends FieldValues> {
	register: UseFormRegister<T>
	formState: FormState<T>
	getValues: (field: keyof T) => string
}
