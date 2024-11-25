import { HTMLInputTypeAttribute, InputHTMLAttributes, useState } from 'react'
import styles from './Input.module.scss'
import { ClosedEyeIcon, OpenedEyeIcon } from '../Icons/Eye'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	title?: string
	type?: 'text' | 'password' | 'email'
}

export const Input = ({ title, type = 'text' }: IProps) => {
	const [fieldType, setFieldType] = useState<HTMLInputTypeAttribute>(type)

	return (
		<div className={styles['input']}>
			<p className={styles['input__title']}>{title}</p>
			<input className={styles['input__field']} type={fieldType} />
			{type === 'password' && (
				<button
					type='button'
					onClick={() => {
						fieldType === 'password'
							? setFieldType('text')
							: setFieldType('password')
					}}
				>
					{fieldType === 'password' ? (
						<ClosedEyeIcon className={styles.icon} />
					) : (
						<OpenedEyeIcon className={styles.icon} />
					)}
				</button>
			)}
		</div>
	)
}
