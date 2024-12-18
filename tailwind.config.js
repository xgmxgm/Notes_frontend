/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				'opacity-slow': 'opacity-slow 0.3s 1',
			},
			keyframes: {
				'opacity-slow': {
					'0%': { opacity: 0, top: -10, scale: 0, right: 0 },
					'100%': { opacity: 1, top: '4rem', scale: 1, right: '3rem' },
				},
			},
			colors: {
				customblue: '#325CFE',
			},
		},
	},
	plugins: [],
}
