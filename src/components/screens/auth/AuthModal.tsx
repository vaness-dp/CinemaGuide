'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import type { IAuthForm } from '@/shared/types/auth.types'

import authService from '@/services/auth/auth.service'

export function AuthModal({ onClose }: { onClose: () => void }) {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange',
	})

	const [isLoginForm, setIsLoginForm] = useState<boolean>(false)

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.login(data.email, data.password),
		onSuccess() {
			toast.success('Login successfully')
			reset()
			push('/profile')
		},
	})

	const onSubmit: SubmitHandler<IAuthForm> = (data) => {
		mutate(data)
	}

	return (
		<div className="flex min-h-screen">
			<form
				className="w-1/4 m-auto shadow bg-black/50 rounded-xl p-10"
				onSubmit={handleSubmit(onSubmit)}
			>
				{/* HEADING */}
				{/* FIELDS */}
				<div className="flex items-center justify-center gap-5">
					{/* BUTTONS */}
				</div>
			</form>
		</div>
	)
}
