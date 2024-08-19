'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { AuthModal } from '@/components/screens/auth/AuthModal'
import { Loader } from '@/components/ui/loader/Loader'

import { useProfile } from '@/hooks/useProfile'

import styles from './Menu.module.scss'
import { MenuItem } from './MenuItem'
import { SearchFIeld } from './SearchField/SearchFIeld'
import { LoginButton } from './auth/LoginButton'
import { ProfileButton } from './auth/ProfileButton'
import { menu } from './menu.data'

export function Menu() {
	const { data, isLoading } = useProfile()

	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

	const { push } = useRouter()

	return (
		<>
			<ul className={styles.list}>
				{menu.map((item) => (
					<MenuItem key={item.link} item={item} />
				))}
				<SearchFIeld />

				{isLoading ? (
					<Loader />
				) : data?.data ? (
					<ProfileButton onClick={() => push('/profile')}>
						{data.data.name}
					</ProfileButton>
				) : (
					<LoginButton onClick={() => setIsAuthModalOpen(true)} />
				)}

				{isAuthModalOpen && (
					<AuthModal onClose={() => setIsAuthModalOpen(false)} />
				)}
			</ul>
		</>
	)
}
