import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setIsAuth } from '@/app/store/slices'
import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { useNotificationContext } from '@/features/Notification/context'
import {
	getAuth,
	signOut,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth'
import { clearUser, setUser } from '@/entities/User/slice'

export const useAuthActions = () => {
	const auth = getAuth()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const userState = useAppSelector(state => state.user)
	const { setError, setSuccess } = useNotificationContext()
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const loginWithEmailAndPassword = async (email: string, password: string) => {
		setIsLoading(true)

		await signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
					})
				)
				console.log('loginWithEmailAndPassword/userState: ', userState)
				dispatch(setIsAuth(true))
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
				.then(() => {
					loginWithEmailAndPassword(email, password)
				})
				.catch(() => {
					setError('This email is already busy')
					return
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
				setSuccess('Message sent to email')
			})
			.catch(() => {
				setError('Service is not working. Try again later')
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	const logout = async () => {
		dispatch(clearUser())
		signOut(auth)
		dispatch(setIsAuth(false))
	}

	return {
		loginWithEmailAndPassword,
		registerUserWithEmailAndPassword,
		logout,
		sendPasswordReset,
		isLoading,
	}
}
