import { useAuthActions } from '@/features/Authorize/hooks'
import { useUserStore } from '@/app/store/storeUser'
import { useIsAuth } from '@/app/store/storeIsAuth'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared/ui/Button'
import styles from './Home.module.scss'
import { useEffect } from 'react'

export const HomePage = () => {
	const { logout, isLoading } = useAuthActions()
	const { user } = useUserStore()
	const navigate = useNavigate()
	const { isAuth } = useIsAuth()

	useEffect(() => {
		if (!isAuth) navigate('/authorize')
	})

	if (!isAuth) return

	return (
		<div className={styles['home']}>
			<p>Home page</p>
			<h2>{user.id}</h2>
			<h2>{user.email}</h2>
			<Button isLoading={isLoading} onClick={() => logout()}>
				Logout
			</Button>
		</div>
	)
}
