import { ButtonHTMLAttributes, forwardRef } from 'react'
import styles from './Button.module.scss'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, IProps>(
	({ children, ...props }) => {
		return (
			<button className={styles['button']} {...props}>
				{children}
			</button>
		)
	}
)
