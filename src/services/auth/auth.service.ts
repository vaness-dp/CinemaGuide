import axios from 'axios'

import { API_URL } from '@/configs/constants'

import { getContentType } from '../../configs/constants'

export const AuthService = {
	async login(email: string, password: string) {
		return axios.post(
			`${API_URL}/auth/login`,
			new URLSearchParams({ email, password }),
			{
				headers: getContentType(),
				withCredentials: true,
			}
		)
	},

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
	},

	async logout() {
		return axios.get(`${API_URL}/auth/logout`, {
			withCredentials: true,
		})
	},

	async getProfile() {
		return axios.get(`${API_URL}/profile`, {
			withCredentials: true,
		})
	},
}
