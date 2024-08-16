import { CSSProperties, ReactNode } from 'react'

interface IHeading {
	children: ReactNode
	style: CSSProperties
}

export function Heading({ children, style }: IHeading) {
	return (
		<h2
			className="text-5xl leading-[56px] font-bold max-w-[600px]"
			style={style}
		>
			{children}
		</h2>
	)
}
