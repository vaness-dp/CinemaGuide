class SITE {
	private root = 'http://localhost:3000'

	HOME = this.root
	GENRES = `${this.root}/genres`
	PROFILE = `${this.root}/profile`
}

export const SITE_PAGES = new SITE()
