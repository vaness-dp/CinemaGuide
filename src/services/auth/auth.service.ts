import { axiosClassic } from 'api/api.helpers'
import axios from 'axios'

import { IUser } from '@/shared/types/user.types'

import { API_URL, getContentType } from '@/configs/constants'

class AuthService {
	async login(email: string, password: string) {
		return axios.post(
			`${API_URL}/auth/login`,
			new URLSearchParams({ email, password }),
			{
				headers: getContentType(),
				withCredentials: true,
			}
		)
	}

	async register(
		email: string,
		password: string,
		name: string,
		surname: string
	) {
		return axios.post(
			`${API_URL}/user`,
			new URLSearchParams({ email, password, name, surname }),
			{
				headers: getContentType(),
				withCredentials: true,
			}
		)
	}

	async logout() {
		return axiosClassic.get<boolean>('/auth/logout')
	}

	async profile() {
		return axiosClassic.get<IUser>(`/profile`)
	}
}

export default new AuthService()
