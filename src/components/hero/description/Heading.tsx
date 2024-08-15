import { useRandomMovie } from '@/hooks/useRandomMovie'

export function Heading() {
	const { data: movie } = useRandomMovie()

	return <h1>{movie.title}</h1>
}
