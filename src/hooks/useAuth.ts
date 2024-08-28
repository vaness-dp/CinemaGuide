import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import type { IAuthForm } from '@/shared/types/auth.types'

import authService from '@/services/auth/auth.service'

import { SITE_PAGES } from '@/configs/pages-url.config'

export const useAuth = () => {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange',
	})

	const [isLoginForm, setIsLoginForm] = useState<boolean>(true)

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			isLoginForm
				? authService.login(data.email, data.password)
				: authService.register(
						data.email,
						data.password,
						data.name!,
						data.surname!
					),
		onSuccess() {
			toast.success(
				isLoginForm ? 'Successfully logged in!' : 'Successfully registered!'
			)
			reset()
			if (!isLoginForm) {
				setIsLoginForm(true)
			}
			push(SITE_PAGES.PROFILE)
		},
	})

	const onSubmit: SubmitHandler<IAuthForm> = (data) => {
		mutate(data)
	}

	const handleToggleForm = () => {
		setIsLoginForm(!isLoginForm)
		reset()
	}

	return {
		register,
		handleSubmit,
		onSubmit,
		handleToggleForm,
		isLoginForm,
	}
}
