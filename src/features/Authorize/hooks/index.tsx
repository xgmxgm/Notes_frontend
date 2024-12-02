import { useNavigate } from 'react-router-dom'
import { useIsAuth } from '@/app/store/storeIsAuth'
import { useUserStore } from '@/app/store/storeUser'
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth'
import { useNotificationContext } from '@/features/Notification/context'

export const useAuthActions = () => {
	const navigate = useNavigate()
	const { setAuth } = useIsAuth()
	const { setUser, removeUser } = useUserStore()
	const { setError, setSuccess } = useNotificationContext()

	const loginWithEmailAndPassword = (email: string, password: string) => {
		const auth = getAuth()

		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				setUser({
					email: user.email,
					id: user.uid,
				})
				setAuth(true)
				setSuccess('You have successfully logged in')
				navigate('/')
			})
			.catch(err => {
				setError('Email or Password entered incorrectly')
				console.log('Context: ', err)
			})
	}

	const registerUserWithEmailAndPassword = (
		email: string,
		password: string
	) => {
		const auth = getAuth()

		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				setUser({
					email: user.email,
					id: user.uid,
				})
				setAuth(true)
				setSuccess('You have successfully logged in')
				navigate('/')
			})
			.catch(err => {
				setError('Service is not working. Try again later')
				console.error(err)
			})
	}

	const logout = () => {
		removeUser()
		setAuth(false)
	}

	return { loginWithEmailAndPassword, registerUserWithEmailAndPassword, logout }
}
