import { InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	title?: string
	type?: 'text' | 'password' | 'email'
}

export const Input = ({ title, type = 'text' }: IProps) => {
	return (
		<div className={styles['input']}>
			<p className={styles['input__title']}>{title}</p>
			<input className={styles['input__field']} type={type} />
		</div>
	)
}
