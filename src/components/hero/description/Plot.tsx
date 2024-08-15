import { useRandomMovie } from '@/hooks/useRandomMovie'

export function Plot() {
	const { data: movie } = useRandomMovie()

	return <p>{movie.plot}</p>
}
