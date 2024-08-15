'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ReactDOM from 'react-dom'

import { Logo } from '@/components/layout/navigation/Logo'
import { AuthFields } from '@/components/shared/user/AuthFields'
import { CloseButton } from '@/components/ui/form-elements/CloseButton'
import Field from '@/components/ui/form-elements/Field'
import { LoginButton } from '@/components/ui/form-elements/LoginButton'
import { RegisterButton } from '@/components/ui/form-elements/RegisterButton'

import styles from './Auth.module.scss'
import { IAuth } from './auth.interface'
import { useAuth } from './useAuth'

export function Auth({ onClose }: IAuth) {
	const [isAuth, setIsAuth] = useState(false)
	const router = useRouter()

	const handleSuccess = (data: any) => {
		console.log('Success:', data)
		router.push('/profile')
	}

	const handleError = (error: any) => {
		console.log('Error:', error)
		alert('Что-то пошло не так!')
	}

	const { register, handleSubmit, formState, reset, getValues } = useAuth(
		isAuth,
		handleSuccess,
		handleError
	)

	const toggleForm = () => {
		setIsAuth((prev) => !prev)
		reset() // Сбрасываем поля формы при переключении состояния
	}

	return ReactDOM.createPortal(
		<section className={styles.auth}>
			<div className={styles.wrapper}>
				<Logo
					style={{ marginBottom: '40px', width: '180px', height: '24px' }}
				/>
				<form className="flex flex-col" onSubmit={handleSubmit}>
					<AuthFields
						register={register}
						formState={formState}
						isPasswordRequired={!isAuth}
					/>

					{/* Если isAuth true, показываем дополнительные поля */}
					{isAuth && (
						<>
							<Field
								{...register('name', { required: true })}
								placeholder="Name"
								icon="MdPerson"
								error={formState.errors?.name}
							/>
							<Field
								{...register('surname', { required: true })}
								placeholder="Surname"
								icon="MdPerson"
								error={formState.errors?.surname}
							/>
							<Field
								{...register('confirmPassword', {
									required: true,
									validate: (value) =>
										value === getValues('password') || 'Passwords do not match',
								})}
								placeholder="Confirm Password"
								icon="MdLock"
								error={formState.errors?.confirmPassword}
								type="password"
							/>
						</>
					)}

					<LoginButton
						type="submit"
						className="btn-primary"
						style={{ marginBottom: '24px', marginTop: '12px' }}
					>
						{isAuth ? 'Register' : 'Login'}
					</LoginButton>

					<RegisterButton isAuth={isAuth} onClick={toggleForm} />
				</form>
				<CloseButton onClose={onClose} />
			</div>
		</section>,
		document.body
	)
}
