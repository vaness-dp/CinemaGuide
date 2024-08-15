import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://cinemaguide.skillbox.cc/',
	headers: {
		'Content-Type': 'application/json',
	},
})
