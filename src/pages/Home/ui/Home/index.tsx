import { useAuthActions } from '@/features/Authorize/hooks'
import { useUserStore } from '@/app/store/storeUser'
import { useIsAuth } from '@/app/store/storeIsAuth'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared/ui/Button'
import { useEffect } from 'react'

export const HomePage = () => {
	const { logout } = useAuthActions()
	const navigate = useNavigate()
	const { isAuth } = useIsAuth()
	const { user } = useUserStore()

	useEffect(() => {
		if (!isAuth) navigate('/authorize')
	})

	if (!isAuth) return

	return (
		<div>
			<p>Home page</p>
			<h2>{user.id}</h2>
			<h2>{user.email}</h2>
			<Button onClick={() => logout()}>Logout</Button>
		</div>
	)
}
