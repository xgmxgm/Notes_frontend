import { useNavigate } from 'react-router-dom'
import { useIsAuth } from '@/app/store/storeIsAuth'
import { useUserStore } from '@/app/store/storeUser'
import { useNotification } from '@/features/Notification'
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth'

export const useAuthActions = () => {
	const navigate = useNavigate()
	const { setAuth } = useIsAuth()
	const { setUser, removeUser } = useUserStore()
	const { errorNotification, successNotification } = useNotification()

	const loginWithEmailAndPassword = (email: string, password: string) => {
		const auth = getAuth()

		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				setUser({
					email: user.email,
					id: user.uid,
				})
				setAuth(true)
				navigate('/')
			})
			.catch(err => {
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
				navigate('/')
			})
			.catch(console.error)
	}

	const logout = () => {
		removeUser()
		setAuth(false)
	}

	return { loginWithEmailAndPassword, registerUserWithEmailAndPassword, logout }
}
