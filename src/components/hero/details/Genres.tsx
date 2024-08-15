import { useRandomMovie } from '@/hooks/useRandomMovie'

export function Genres() {
	const { data: movie } = useRandomMovie()

	return (
		<span>
			{movie.genres.map((genre: string) => genre.split(' ')[0]).join(', ')}
		</span>
	)
}
