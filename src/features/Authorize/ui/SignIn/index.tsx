import styles from './SignIn.module.scss'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { useAuthActions } from '../../hooks'
import { FC, FormEvent, useState } from 'react'
import { ForgotPassword } from '../ForgotPassword'

interface IProps {
	setIsSignIn: (isSignIn: boolean) => void
}

export const SignIn: FC<IProps> = ({ setIsSignIn }) => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const { loginWithEmailAndPassword, isLoading } = useAuthActions()
	const [forgotPassword, setForgotPassword] = useState<boolean>(false)

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		loginWithEmailAndPassword(email, password)
	}

	return !forgotPassword ? (
		<form className={styles['sign-in']} onSubmit={event => handleSubmit(event)}>
			<div>
				<h2 className={styles['sign-in__title']}>Welcome to Note app</h2>
				<p className={styles['sign-in__sub-title']}>Sign in your account</p>
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
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder='Password'
						title='Password'
						type='password'
						required
					/>
				</div>
				<div className={styles['sign-in__forgot-password']}>
					<p
						className={styles['sign-in__link']}
						onClick={() => setForgotPassword(true)}
					>
						Forgot password
					</p>
				</div>
				<div className='mt-10'>
					<Button type='submit' isLoading={isLoading}>
						Sign In
					</Button>
				</div>
			</div>
			<div className={styles['sign-in__sign-up-link']}>
				<p className={styles['sign-in__text']}>Don’t have an account?</p>
				<p
					className={styles['sign-in__link']}
					onClick={() => setIsSignIn(false)}
				>
					Sign Up
				</p>
			</div>
		</form>
	) : (
		<ForgotPassword setForgotPassword={setForgotPassword} />
	)
}
