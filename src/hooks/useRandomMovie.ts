import { api } from '../api/api.helpers'
import { useQuery } from '@tanstack/react-query'

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

// const fetchDataProfile = async () => {
// 	const response = await api.get('/profile')
// 	return response.data
// }

// export const useDataProfile = () => {
// 	return useQuery({
// 		queryKey: ['dataProfile'],
// 		queryFn: fetchDataProfile,
// 	})
// }
