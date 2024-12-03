import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { useAuthActions } from '../../hooks'
import { FC, FormEvent, useState } from 'react'
import styles from './ForgotPassword.module.scss'

interface IProps {
	setForgotPassword: (forgotPassword: boolean) => void
}

export const ForgotPassword: FC<IProps> = ({ setForgotPassword }) => {
	const [email, setEmail] = useState<string>('')
	const { sendPasswordReset, isLoading } = useAuthActions()

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		sendPasswordReset(email)
	}

	return (
		<form
			className={styles['forgot-password']}
			onSubmit={event => handleSubmit(event)}
		>
			<div>
				<h2 className={styles['forgot-password__title']}>
					Welcome to Note app
				</h2>
				<p className={styles['forgot-password__sub-title']}>
					Send password reset
				</p>
			</div>
			<div>
				<div>
					<Input
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder='Email'
						title='Email'
						type='email'
						required
					/>
				</div>
				<div className={styles['forgot-password__back']}>
					<p className={styles['forgot-password__text']}>Have an account?</p>
					<p
						className={styles['forgot-password__link']}
						onClick={() => setForgotPassword(false)}
					>
						Sign In
					</p>
				</div>
				<div className='mt-10'>
					<Button type='submit' isLoading={isLoading}>
						Send
					</Button>
				</div>
			</div>
		</form>
	)
}
