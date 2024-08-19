import { useQuery } from '@tanstack/react-query'

import authService from '@/services/auth/auth.service'

export const useProfile = () => {
	return useQuery({
		queryKey: ['profile'],
		queryFn: () => authService.profile(),
		staleTime: 5 * 60 * 1000, // 5 минут (или любой другой интервал)
	})
}
