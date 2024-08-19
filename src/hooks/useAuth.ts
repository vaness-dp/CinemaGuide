import { useForm } from 'react-hook-form'

import authService from '@/services/auth/auth.service'

interface IAuthForm {
	email: string
	password: string
	name?: string
	surname?: string
	confirmPassword?: string
	values?: string
}

export const useAuth = (
	isAuth: boolean,
	onSuccess: (data: any) => void,
	onError: (error: any) => void
) => {
	const { register, handleSubmit, formState, setError, getValues, reset } =
		useForm<IAuthForm>({
			mode: 'onChange',
		})

	const onSubmit = async (data: IAuthForm) => {
		if (isAuth) {
			// Регистрация
			if (!data.name || !data.surname) {
				onError(new Error('Name and Surname are required for registration'))
				return
			}

			if (data.password !== data.confirmPassword) {
				setError('confirmPassword', {
					type: 'manual',
					message: 'Passwords do not match',
				})
				return
			}

			try {
				const response = await authService.register(
					data.email,
					data.password,
					data.name,
					data.surname
				)
				onSuccess(response.data)
			} catch (error) {
				onError(error)
			}
		} else {
			// Логин
			try {
				const response = await authService.login(data.email, data.password)
				onSuccess(response.data)
			} catch (error) {
				onError(error)
			}
		}
		reset()
	}

	return {
		register,
		handleSubmit: handleSubmit(onSubmit),
		formState,
		reset,
		getValues,
	}
}
