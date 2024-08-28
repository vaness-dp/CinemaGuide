'use client'

import cn from 'clsx'

import { Loader } from '@/ui/loader/Loader'

import { useRandomMovie } from '@/hooks/useRandomMovie'

import styles from './Hero.module.scss'
import { AboutButton } from './buttons/AboutButton'
import { HeartButton } from './buttons/HeartButton'
import { RefreshButton } from './buttons/RefreshButton'
import { StarButton } from './buttons/StarButton'
import { TrailerButton } from './buttons/TrailerButton'
import { Heading } from './description/Heading'
import { Plot } from './description/Plot'
import { Genres } from './details/Genres'
import { ReleaseYear } from './details/ReleaseYear'
import { Runtime } from './details/Runtime'

export function Hero() {
	const { data: movie, isLoading, error } = useRandomMovie()

	if (isLoading) return <Loader />
	if (error) return <p>Error loading movie: {error.message}</p>

	return (
		<section className={styles.hero}>
			<div className={cn(styles.wrapper, 'container')}>
				{movie ? (
					<div className={styles.content}>
						<div className={styles.details}>
							<StarButton rating={movie.tmdbRating} />
							<ReleaseYear />
							<Genres />
							<Runtime />
						</div>

						<div className={styles.description}>
							<Heading />
							<Plot />
						</div>

						<div className={styles.buttons}>
							<TrailerButton />
							<AboutButton />
							<HeartButton />
							<RefreshButton />
						</div>
					</div>
				) : (
					<p className="text-pink-300">No movie found</p>
				)}
			</div>
		</section>
	)
}
