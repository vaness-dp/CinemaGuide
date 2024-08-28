import { useQuery } from '@tanstack/react-query'

import { api } from '../api/api.helpers'

const fetchRandomMovie = async () => {
	const response = await api.get('/movie/random')
	return response.data
}

export const useRandomMovie = () => {
	return useQuery({
		queryKey: ['randomMovie'],
		queryFn: fetchRandomMovie,
	})
}
