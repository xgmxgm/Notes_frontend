import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import styles from './SignIn.module.scss'

export const SignIn = () => {
	return (
		<form className={styles['sign-in']}>
			<div>
				<h2 className={styles['sign-in__title']}>Welcome to Note app</h2>
				<p className={styles['sign-in__sub-title']}>Sign in your account</p>
			</div>
			<div>
				<Input title='Email' type='email' required />
				<Input title='Password' type='password' required />
			</div>
			<div>
				<Button>Sign In</Button>
			</div>
		</form>
	)
}
