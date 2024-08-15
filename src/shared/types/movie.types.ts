export interface IMovie {
	id: number
	title: string
	plot: string
	releaseYear: number
	genres: string[]
	runtime: number
	posterUrl: string
	tmdRating: number
}

export interface ITopMovies {
	id: number
	posterUrl: string
	plot: string
}
