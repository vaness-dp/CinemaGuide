import { useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { AuthService } from '../../../services/auth/auth.service'


export const useLogout = (
	onSuccess: () => void,
	onError: (error: any) => void
) => {
	const mutation = useMutation({
		mutationFn: AuthService.logout,
		onSuccess,
		onError,
	})

	return mutation
}

export const useProfile = (
	onSuccess: (data: any) => void,
	onError: (error: any) => void
) => {
	const query = useQuery<AxiosResponse, Error>({
		queryKey: ['profile'],
		queryFn: AuthService.getProfile,
	})

	if (query.isSuccess) {
		onSuccess(query.data)
	}

	if (query.isError) {
		onError(query.error)
	}

	return query
}
