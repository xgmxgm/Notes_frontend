import { Button } from '@/shared/ui/Button'
import styles from './SettingsSlect.module.scss'
import { useUserStore } from '@/app/store/storeUser'
import { useAuthActions } from '@/features/Authorize/hooks'

export const SettingsModal = () => {
	const { isLoading, logout } = useAuthActions()
	const { user } = useUserStore()

	return (
		<div className={styles['settings-modal']}>
			<div className={styles['settings-modal__user']}>
				<p>{user.id}</p>
				<p>{user.email}</p>
			</div>
			<div className={styles['settings-modal__item']}>
				<Button isLoading={isLoading} onClick={() => logout()}>
					Logout
				</Button>
			</div>
		</div>
	)
}
