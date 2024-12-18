import { ButtonHTMLAttributes, forwardRef } from 'react'
import styles from './Button.module.scss'
import { Spinner } from '../Spinner'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, IProps>(
	({ children, isLoading, ...props }, ref) => {
		return (
			<button
				className={styles['button']}
				{...props}
				ref={ref}
				disabled={isLoading ? true : false}
			>
				{isLoading ? <Spinner /> : children}
			</button>
		)
	}
)
