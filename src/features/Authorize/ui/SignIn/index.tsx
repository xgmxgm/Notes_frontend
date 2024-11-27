import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import styles from './SignIn.module.scss'
import { FC } from 'react'

interface IProps {
	setIsSignIn: (isSignIn: boolean) => void
}

export const SignIn: FC<IProps> = ({ setIsSignIn }) => {
	return (
		<form className={styles['sign-in']}>
			<div>
				<h2 className={styles['sign-in__title']}>Welcome to Note app</h2>
				<p className={styles['sign-in__sub-title']}>Sign in your account</p>
			</div>
			<div>
				<div>
					<Input placeholder='Email' title='Email' type='email' required />
					<Input
						placeholder='Password'
						title='Password'
						type='password'
						required
					/>
				</div>
				<div className='mt-10'>
					<Button type='submit'>Sign In</Button>
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
	)
}
