'use client'

import { PropsWithChildren, useEffect, useState } from 'react'

import { Loader } from '@/components/ui/loader/Loader'

import { useRandomMovie } from '@/hooks/useRandomMovie'

import styles from './Layout.module.scss'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'

export function Layout({ children }: PropsWithChildren) {
	const { data: movie, isLoading } = useRandomMovie()
	const [imageSrc, setImageSrc] = useState<string | null>(null)

	useEffect(() => {
		if (movie?.backdropUrl) {
			const img = new Image()
			img.src = movie.backdropUrl
			img.onload = () => setImageSrc(movie.backdropUrl)
		}
	}, [movie?.backdropUrl])

	if (isLoading) return <Loader />

	return (
		<div className={styles.layout}>
			<div className={styles.imageWrapper}>
				{imageSrc ? <img src={imageSrc} alt="poster" /> : <Loader />}
			</div>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
