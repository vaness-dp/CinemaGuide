import { useRandomMovie } from '@/hooks/useRandomMovie'

export function ReleaseYear() {
	const { data: movie } = useRandomMovie()

	return <span>{movie.releaseYear}</span>
}
