import { Button } from '@/shared/ui/Button'
import styles from './SettingsSlect.module.scss'
import { useAppSelector } from '@/app/store/store'
import { useAuthActions } from '@/features/Authorize/hooks'

export const SettingsModal = () => {
	const { isLoading, logout } = useAuthActions()
	const user = useAppSelector(state => state.user)

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
