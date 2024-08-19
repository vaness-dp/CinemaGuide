'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import { Heart, User2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Footer } from '@/components/layout/footer/Footer'
import { Header } from '@/components/layout/header/Header'
import { Button } from '@/components/ui/button/Button'
import { Heading } from '@/components/ui/heading/Heading'
import { Loader } from '@/components/ui/loader/Loader'

import authService from '@/services/auth/auth.service'

import styles from './Profile.module.scss'

export function Profile() {
	const { push } = useRouter()

	const { data, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => authService.profile(),
	})

	const { mutate: mutateLogout, isPending: isLogoutPending } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess() {
			push('/')
		},
	})

	return (
		<div className="flex flex-col justify-between h-screen">
			<Header style={{ marginBottom: '0px' }} />
			<section className={styles.profile}>
				<div className="container flex flex-col items-start">
					<Heading style={{ marginBottom: '64px' }}>Profile</Heading>
					<div className={styles.tabs}>
						<button className="link-underline">
							<Heart />
							Favorites movies
						</button>
						<button className="">
							<User2 />
							Settings profile
						</button>
					</div>

					{isLoading ? (
						<Loader />
					) : data?.data ? (
						<div className={styles.settings}>
							<div className="mb-10">
								Name Surname
								<span>
									{data?.data.name} {data?.data.surname}
								</span>
							</div>

							<div className="mb-16">
								Email
								<span>{data?.data.email}</span>
							</div>

							<div>
								<span>{data?.data.favorites}</span>
							</div>

							<Button onClick={() => mutateLogout()} disabled={isLogoutPending}>
								Logout
							</Button>
						</div>
					) : (
						'Not found'
					)}
				</div>
			</section>
			<Footer style={{ paddingTop: '0px' }} />
		</div>
	)
}
