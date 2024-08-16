import { Heart, User2 } from 'lucide-react'

import { Footer } from '@/components/layout/footer/Footer'
import { Header } from '@/components/layout/header/Header'
import { Heading } from '@/components/ui/heading/Heading'

import styles from './Profile.module.scss'

export function Profile() {
	return (
		<>
			<Header />
			<section className={styles.profile}>
				<div className="container flex flex-col items-start">
					<Heading style={{ marginBottom: '64px' }}>Profile</Heading>
					<div className={styles.links}>
						<button className="link-underline">
							<Heart />
							Favorites movies
						</button>
						<button className="">
							<User2 />
							Settings profile
						</button>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}
