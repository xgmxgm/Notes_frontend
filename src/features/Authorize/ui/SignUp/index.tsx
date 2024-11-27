import { Button } from '@/shared/ui/Button'
import styles from './SignUp.module.scss'
import { Input } from '@/shared/ui/Input'
import { FC } from 'react'

interface IProps {
	setIsSignIn: (isSignIn: boolean) => void
}

export const SignUp: FC<IProps> = ({ setIsSignIn }) => {
	return (
		<form className={styles['sign-up']}>
			<div>
				<h2 className={styles['sign-up__title']}>Welcome to Note app</h2>
				<p className={styles['sign-up__sub-title']}>Create your account</p>
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
					<Input
						placeholder='Repeat password'
						title='Repeat password'
						type='password'
						required
					/>
				</div>
				<div className='mt-10'>
					<Button type='submit'>Sign Up</Button>
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
