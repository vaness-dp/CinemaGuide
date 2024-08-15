import { useQuery } from '@tanstack/react-query'

import { api } from '../api/api.helpers'

const fetchTopMovies = async () => {
	const response = await api.get('/movie/top10')
	return response.data
}

export const useTopMovies = () => {
	return useQuery({
		queryKey: ['topMovies'],
		queryFn: fetchTopMovies,
	})
}
