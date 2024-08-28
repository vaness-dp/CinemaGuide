import { ReactNode, createContext, useContext, useState } from 'react'

interface AuthContextType {
	user: User | null
	setUser: (user: User | null) => void
}

interface User {
	name: string
	email: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null)

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuthContext = () => useContext(AuthContext)
