import { useMemo } from 'react'

import { MaterialIcon } from '@/components/ui/icons/MaterialIcon'

interface IStar {
	rating: number
}

export function StarButton({ rating }: IStar) {
	const starColor = useMemo(() => {
		const getColor = (rating: number): string => {
			if (rating >= 8.6) return '#A59400'
			if (rating >= 7.5) return '#308E21'
			if (rating >= 6.3) return '#777777'
			return '#C82020'
		}

		const roundedRating = Number(rating.toFixed(1))
		return getColor(roundedRating)
	}, [rating])

	const roundedRating = Number(rating.toFixed(1))

	return (
		<div style={{ backgroundColor: starColor }}>
			<MaterialIcon name="MdStar" />
			<span>{roundedRating}</span>
		</div>
	)
}
