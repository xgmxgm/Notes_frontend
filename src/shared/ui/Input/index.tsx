import { HTMLInputTypeAttribute, InputHTMLAttributes, useState } from 'react'
import { ClosedEyeIcon, OpenedEyeIcon } from '../Icons/Eye'
import styles from './Input.module.scss'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	title?: string
	type?: 'text' | 'password' | 'email'
	placeholder?: string
}

export const Input = ({
	title,
	type = 'text',
	placeholder,
	...props
}: IProps) => {
	const [fieldType, setFieldType] = useState<HTMLInputTypeAttribute>(type)

	return (
		<div className={styles['input']}>
			<p className={styles['input__title']}>{title}</p>
			<div className={styles['input__with-icon']}>
				<input
					className={styles['input__field']}
					placeholder={placeholder}
					type={fieldType}
					{...props}
				/>
				{type === 'password' ? (
					<button
						className={styles['input__eye-button']}
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
				) : (
					<button className={styles['input__eye-button']} type='button'>
						<p className='w-[16px] h-[13px] flex justify-between items-center cursor-default'>
							@
						</p>
					</button>
				)}
			</div>
		</div>
	)
}
