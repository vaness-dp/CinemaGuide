import { useRandomMovie } from '@/hooks/useRandomMovie'

import { formatRuntime } from './format-runtime'

export function Runtime() {
	const { data: movie } = useRandomMovie()

	return <span>{formatRuntime(movie.runtime)}</span>
}
