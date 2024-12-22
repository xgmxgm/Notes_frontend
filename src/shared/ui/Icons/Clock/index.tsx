import { type FC } from 'react'

interface IProps {
	width?: number
	height?: number
}

export const Clock: FC<IProps> = ({ height = 50, width = 50 }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g
				id='SVGRepo_tracerCarrier'
				strokeLinecap='round'
				strokeLinejoin='round'
			></g>
			<g id='SVGRepo_iconCarrier'>
				{' '}
				<path
					d='M12 7V12L13.5 14.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
					stroke='#000000'
					strokeWidth='1'
					strokeLinecap='round'
					strokeLinejoin='round'
				></path>{' '}
			</g>
		</svg>
	)
}
