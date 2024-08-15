import Image from 'next/image'

import { Footer } from '@/components/layout/footer/Footer'
import { Header } from '@/components/layout/header/Header'

import styles from './Genres.module.scss'
import { genreCards } from './genres.data'

export function Genres() {
	return (
		<>
			<Header />
			<section className={styles.genres}>
				<div className="container flex flex-col items-start">
					<h2 className={styles.heading}>Genres movie</h2>
					<ul>
						{genreCards.map((item) => (
							<li key={item.title}>
								<div className={styles.top}>
									<Image
										className="rounded-3xl bg-contain"
										src={item.image}
										alt={item.alt}
										width={290}
										height={220}
									/>
								</div>
								<div className={styles.bottom}>
									<h3 className="text-2xl left-8 pb-[30px]">{item.title}</h3>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>
			<Footer />
		</>
	)
}
