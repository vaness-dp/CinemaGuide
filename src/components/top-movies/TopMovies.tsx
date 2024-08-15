'use client'

import cn from 'clsx'

import { useTopMovies } from '@/hooks/useTopMovies'

import { ITopMovies } from '@/shared/types/movie.types'

import { Loader } from '../ui/loader/Loader'

import styles from './TopMovies.module.scss'

export function TopMovies() {
	const { data: topMovies, isLoading, error } = useTopMovies()

	if (isLoading) return <Loader />
	if (error) return <p>Error loading movie: {error.message}</p>

	return (
		<section className="mt-[250px] mb-[120px]">
			<div className={cn(styles.content, 'container')}>
				<h1>Top 10 movies</h1>
				<ul>
					{topMovies.map((item: ITopMovies, index: number) => (
						<li key={item.id}>
							<div>
								<img src={item.posterUrl} alt="" />
							</div>

							<span>{index + 1}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
