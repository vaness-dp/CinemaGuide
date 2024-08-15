import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'

import { Logo } from '@/components/layout/navigation/Logo'
import { AuthFields } from '@/components/shared/user/AuthFields'
import { CloseButton } from '@/components/ui/form-elements/CloseButton'
import Field from '@/components/ui/form-elements/Field'
import { LoginButton } from '@/components/ui/form-elements/LoginButton'
import { RegisterButton } from '@/components/ui/form-elements/RegisterButton'

import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'

import styles from './Auth.module.scss'
import { IAuth } from './auth.interface'
import { useLogin, useRegister } from './useAuth'

export function Auth({ onClose }: IAuth) {
	const { isAuth, setIsAuth } = useAuthContext()
	const navigate = useNavigate()

	const handleSuccess = (data: any) => {
		console.log('Success:', data)
		setIsAuth(true)
		navigate('/profile')
	}

	const handleError = (error: any) => {
		console.log('Error:', error)
		alert('Что-то пошло не так!')
	}

	const { register, handleSubmit, formState } = isAuth
		? useRegister(handleSuccess, handleError)
		: useLogin(handleSuccess, handleError)

	const toggleForm = () => {
		setIsAuth((prev) => !prev)
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

					{isAuth && (
						<>
							<Field
								{...register('name', { required: 'Name is required!' })}
								placeholder="Name"
								icon="MdPerson"
								error={formState.errors?.name}
							/>
							<Field
								{...register('surname', { required: 'Surname is required!' })}
								placeholder="Surname"
								icon="MdPerson"
								error={formState.errors?.surname}
							/>
							<Field
								{...register('confirmPassword', {
									required: 'Confirm your password!',
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
