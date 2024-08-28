export const API_URL = 'https://cinemaguide.skillbox.cc'

export const getContentType = () => ({
	'Content-Type': 'application/x-www-form-urlencoded',
})

export const IS_CLIENT = typeof window !== 'undefined'

export const NO_INDEX_PAGE = { robots: { index: false, follow: false } }

export const SITE_NAME = 'CinemaGuide'
