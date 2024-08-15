'use client'

import { useState } from 'react'

import { Auth } from '@/components/screens/auth/Auth'

import styles from './Menu.module.scss'
import { MenuItem } from './MenuItem'
import { SearchFIeld } from './SearchField/SearchFIeld'
import { LoginButton } from './auth/LoginButton'
import { menu } from './menu.data'

export function Menu() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	return (
		<>
			<ul className={styles.list}>
				{menu.map((item) => (
					<MenuItem key={item.link} item={item} />
				))}
				<SearchFIeld />
				<LoginButton onClick={openModal} />
			</ul>

			{isModalOpen && <Auth onClose={closeModal} />}
		</>
	)
}
