import { Hero } from '@/components/hero/Hero'
import { Layout } from '@/components/layout/Layout'
import { TopMovies } from '@/components/top-movies/TopMovies'

export function Home() {
	return (
		<main>
			<Layout>
				<Hero />
				<TopMovies />
			</Layout>
		</main>
	)
}
