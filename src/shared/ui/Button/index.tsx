import { Spinner } from '../Spinner'
import styles from './Button.module.scss'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, IProps>(
	({ children, isLoading, className, ...props }, ref) => {
		return (
			<button
				className={`${className} ${styles['button']}`}
				{...props}
				ref={ref}
				disabled={isLoading ? true : false}
			>
				{isLoading ? <Spinner /> : children}
			</button>
		)
	}
)
