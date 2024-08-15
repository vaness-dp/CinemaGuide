import { useForm } from 'react-hook-form'

import { AuthService } from '@/services/auth/auth.service'

import { IAuthForm } from './auth.interface'

export const useLogin = (
	onSuccess: (data: any) => void,
	onError: (error: any) => void
) => {
	const { register, handleSubmit, formState, reset } = useForm<IAuthForm>({
		mode: 'onChange',
	})

	const onSubmit = async (data: IAuthForm) => {
		try {
			const response = await AuthService.login(data.email, data.password)
			onSuccess(response.data)
			reset()
		} catch (error) {
			onError(error)
		}
	}

	return { register, handleSubmit: handleSubmit(onSubmit), formState }
}

export const useRegister = (
	onSuccess: (data: any) => void,
	onError: (error: any) => void
) => {
	const { register, handleSubmit, formState, reset } = useForm<IAuthForm>({
		mode: 'onChange',
	})

	const onSubmit = async (data: IAuthForm) => {
		if (!data.name || !data.surname) {
			onError(new Error('Name and Surname are required for registration'))
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
			reset()
		} catch (error) {
			onError(error)
		}
	}

	return { register, handleSubmit: handleSubmit(onSubmit), formState }
}
