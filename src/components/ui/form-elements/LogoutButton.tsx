// import { useLogout } from '@/components/screens/auth/useAuth'

// import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'

// export function LogoutButton() {
// 	const { setIsAuth } = useAuthContext()

// 	const { logout } = useLogout(
// 		() => {
// 			setIsAuth(false)
// 			console.log('Logged out successfully')
// 		},
// 		(error) => {
// 			console.log('Logout failed', error)
// 		}
// 	)

// 	return (
// 		<button onClick={logout} className="btn-primary">
// 			Logout
// 		</button>
// 	)
// }
