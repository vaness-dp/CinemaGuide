'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Auth } from '@/app/auth/Auth'

import { useProfile } from '@/hooks/useProfile'

import { SITE_PAGES } from '@/configs/pages-url.config'

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
					<LoginButton onClick={() => setIsAuthModalOpen(true)} />
				) : data?.data ? (
					<ProfileButton onClick={() => push(SITE_PAGES.PROFILE)}>
						{data.data.name}
					</ProfileButton>
				) : (
					<LoginButton onClick={() => setIsAuthModalOpen(true)} />
				)}
				<div className="z-20">
					{isAuthModalOpen && (
						<Auth onClose={() => setIsAuthModalOpen(false)} />
					)}
				</div>
			</ul>
		</>
	)
}
