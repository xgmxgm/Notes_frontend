import { Input } from '@/shared/ui/Input'
import styles from './SignUp.module.scss'
import { Button } from '@/shared/ui/Button'
import { useAuthActions } from '../../hooks'
import { FC, FormEvent, useState } from 'react'

interface IProps {
	setIsSignIn: (isSignIn: boolean) => void
}

export const SignUp: FC<IProps> = ({ setIsSignIn }) => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [repeatPassword, setRepeatPassword] = useState<string>('')
	const { registerUserWithEmailAndPassword, isLoading } = useAuthActions()

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		registerUserWithEmailAndPassword(email, password, repeatPassword)
	}

	return (
		<form className={styles['sign-up']} onSubmit={event => handleSubmit(event)}>
			<div>
				<h2 className={styles['sign-up__title']}>Welcome to Note app</h2>
				<p className={styles['sign-up__sub-title']}>Create your account</p>
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
					<Input
						onChange={e => setPassword(e.target.value)}
						placeholder='Password'
						title='Password'
						value={password}
						type='password'
						required
					/>
					<Input
						onChange={e => setRepeatPassword(e.target.value)}
						placeholder='Repeat password'
						value={repeatPassword}
						title='Repeat password'
						type='password'
						required
					/>
				</div>
				<div className='mt-10'>
					<Button type='submit' isLoading={isLoading}>
						Sign Up
					</Button>
				</div>
			</div>
			<div className={styles['sign-up__sign-up-link']}>
				<p className={styles['sign-up__text']}>Have an account?</p>
				<p
					className={styles['sign-up__link']}
					onClick={() => setIsSignIn(true)}
				>
					Sign In
				</p>
			</div>
		</form>
	)
}
