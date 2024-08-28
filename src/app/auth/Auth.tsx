'use client'

import { Button } from '@/app/auth/buttons/Button'
import { CloseButton } from '@/app/auth/buttons/CloseButton'
import { Field } from '@/app/auth/fields/Field'

import { useAuth } from '@/hooks/useAuth'

import { Logo } from '@/layout/navigation/Logo'

export function Auth({ onClose }: { onClose: () => void }) {
	const { handleToggleForm, handleSubmit, onSubmit, register, isLoginForm } =
		useAuth()

	return (
		<div className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0">
			<form
				className="relative flex flex-col items-center justify-center text-center py-16 px-10 rounded-3xl bg-white max-w-[420px]"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Logo className="mb-10" />

				<Field
					{...register('email', {
						required: 'Email is required',
					})}
					type="email"
					placeholder="Email"
					icon="MdEmail"
				/>

				{!isLoginForm && (
					<>
						<Field
							{...register('name', {
								required: 'Name is required',
							})}
							type="text"
							placeholder="Name"
							icon="MdPerson"
						/>
						<Field
							{...register('surname', {
								required: 'Surname is required',
							})}
							type="text"
							placeholder="Surname"
							icon="MdPerson"
						/>
					</>
				)}

				<Field
					{...register('password', {
						required: 'Password is required',
					})}
					type="password"
					placeholder="Password"
					icon="MdPassword"
				/>

				{!isLoginForm && (
					<>
						<Field
							{...register('confirmPassword', {
								required: 'Confirm password is required',
							})}
							type="password"
							placeholder="Confirm password"
							icon="MdPassword"
						/>
					</>
				)}

				<Button type="submit" className="w-full mt-3 mb-4">
					{isLoginForm ? 'Login' : 'Register'}
				</Button>

				<Button type="button" className="btn-switch" onClick={handleToggleForm}>
					{isLoginForm ? 'Register' : 'I have password'}
				</Button>
			</form>
			<CloseButton onClick={onClose} />
		</div>
	)
}
