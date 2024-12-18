import styles from './DesktopHeader.module.scss'
import { SettingsButton } from '@/features/Settings'
import { SearchField } from '@/shared/ui/SearchField'

export const DesktopHeader = () => {
	return (
		<header className={styles['header']}>
			<div>
				<h2 className={styles['header__title']}>All Notes</h2>
			</div>
			<div className={styles['header__settings']}>
				<SearchField />
				<SettingsButton />
			</div>
		</header>
	)
}
