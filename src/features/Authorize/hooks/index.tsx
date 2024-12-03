import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useIsAuth } from '@/app/store/storeIsAuth'
import { useUserStore } from '@/app/store/storeUser'
import { useNotificationContext } from '@/features/Notification/context'
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
} from 'firebase/auth'

export const useAuthActions = () => {
	const auth = getAuth()
	const navigate = useNavigate()
	const { setAuth } = useIsAuth()
	const { setUser, removeUser } = useUserStore()
	const { setError, setSuccess } = useNotificationContext()
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const loginWithEmailAndPassword = async (email: string, password: string) => {
		setIsLoading(true)

		await signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				setUser({
					email: user.email,
					id: user.uid,
				})
				setAuth(true)
				setSuccess('You have successfully logged in')
				navigate('/')
			})
			.catch(() => {
				setError('Email or Password entered incorrectly')
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	const registerUserWithEmailAndPassword = async (
		email: string,
		password: string,
		repeatPassword: string
	) => {
		if (password === repeatPassword) {
			setIsLoading(true)

			await createUserWithEmailAndPassword(auth, email, password)
				.then(({ user }) => {
					setUser({
						email: user.email,
						id: user.uid,
					})
					setAuth(true)
					setSuccess('You have successfully logged in')
					navigate('/')
				})
				.catch(() => {
					setError('This email is already busy')
				})
				.finally(() => {
					setIsLoading(false)
				})
		} else {
			setError("Passwords don't match")
		}
	}

	const sendPasswordReset = async (email: string) => {
		setIsLoading(true)

		await sendPasswordResetEmail(auth, email)
			.then(() => {
				navigate('/authorize')
			})
			.catch(() => {
				setError('Service is not working. Try again later')
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	const logout = async () => {
		removeUser()
		signOut(auth)
		setAuth(false)
	}

	return {
		loginWithEmailAndPassword,
		registerUserWithEmailAndPassword,
		logout,
		sendPasswordReset,
		isLoading,
	}
}
