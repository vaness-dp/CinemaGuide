import type { Metadata } from 'next'
import { Play } from 'next/font/google'
import { MainProvider } from 'providers/MainProvider'
import React from 'react'

import '@/assets/styles/globals.scss'

const play = Play({
	subsets: ['cyrillic'],
	weight: ['400', '700'],
	variable: '--font-play',
})

export const metadata: Metadata = {
	title: 'CinemaGuide',
	description: 'The best online cinema for you',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={play.className}>
				<MainProvider>{children}</MainProvider>
			</body>
		</html>
	)
}
