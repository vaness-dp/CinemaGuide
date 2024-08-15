const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			black: colors.black,
			white: colors.white,
			'black/40': '#00000066',
			'white/40': '#ffffffb2',
			'white/50': '#ffffff80',
			gray: {
				500: '#747474',
				700: '#393b3C',
				900: '#0a0b0b',
			},
			indigo: {
				100: '#d6d2f1',
				200: '#b4a9ff',
				300: '#8577e1',
				400: '#6a5dc2',
			},
			pink: {
				300: '#ff7575',
			},
			purple: {
				400: '#DC5DFC',
			},
			transparent: colors.transparent,
		},
		extend: {
			spacing: {
				80: '80px',
				20: '20px',
			},
			maxWidth: {
				1440: '1440px',
				375: '375px',
			},
			screens: {
				'max-1440': { max: '1440px' },
				mobile: { max: '375px' },
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: 0.3,
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
		},
	},
	plugins: [
		plugin(({ addComponents, addUtilities }) => {
			addComponents({
				'.btn-primary': {
					backgroundColor: '#6A5DC2',
					padding: '16px 48px',
					fontSize: '18px',
					lineHeight: '24px',
					fontWeight: '700',
					borderRadius: '1.75rem',
					transition: 'background-color .3s ease-in-out',
					'&:hover': {
						backgroundColor: '#8577e1',
					},
					'&:disabled': {
						color: '#ffffff80',
						backgroundColor: '#d6d2f1',
					},
				},

				'.btn-secondary': {
					backgroundColor: '#393b3c',
					padding: '16px 48px',
					fontSize: '18px',
					lineHeight: '24px',
					fontWeight: '700',
					borderRadius: '1.75rem',
					transition: 'all .4s ease-in-out',
					'&:hover': {
						color: '#000',
						backgroundColor: '#fff',
					},
					'&:disabled': {
						color: '#ffffff80',
						backgroundColor: '#747474',
					},
				},

				'.btn-icon': {
					backgroundColor: '#393b3c',
					padding: '16px 22px',
					borderRadius: '1.75rem',
					transition: 'all .4s ease-in-out',
					'&:disabled': {
						color: '#ffffff80',
						backgroundColor: '#747474',
					},
				},

				'.menu-item': {
					fontSize: '24px',
					lineHeight: '32px',
					transition: 'color .3s ease-in-out',
					'&:hover': {
						color: '#b4a9ff',
					},
				},
			}),
				addUtilities({
					'.text-shadow': {
						textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
					},

					'.outline-border-none': {
						outline: 'none',
						border: 'none',
					},

					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},

					'.image-like-bg': {
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},
				})
		}),
	],
}
