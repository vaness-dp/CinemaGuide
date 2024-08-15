import { useForm } from 'react-hook-form'

import { AuthService } from '@/services/auth/auth.service'

import { IAuthForm } from './auth.interface'

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
				const response = await AuthService.register(
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
				const response = await AuthService.login(data.email, data.password)
				onSuccess(response.data)
			} catch (error) {
				onError(error)
			}
		}
		reset() // Сбросить форму после успешной отправки
	}

	return {
		register,
		handleSubmit: handleSubmit(onSubmit),
		formState,
		reset,
		getValues,
	}
}
