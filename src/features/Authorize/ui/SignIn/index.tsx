import { Input } from '@/shared/ui/Input'

export const SignIn = () => {
	return (
		<form>
			<div>
				<h2>Welcome to Note app</h2>
				<p>Sign in your account</p>
			</div>
			<div>
				<Input title='Email' type='email' required />
				<Input title='Password' type='password' required />
			</div>
		</form>
	)
}
