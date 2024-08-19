import { API_URL, getContentType } from '@/configs/constants'
import axios, { CreateAxiosDefaults } from 'axios'

export const api = axios.create({
	baseURL: 'https://cinemaguide.skillbox.cc/',
	headers: {
		'Content-Type': 'application/json',
	},
})

const axiosOptions:  CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: getContentType(),
	withCredentials: true
}

export const axiosClassic = axios.create(axiosOptions)