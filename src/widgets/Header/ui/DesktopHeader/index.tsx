import { Settings } from '@/shared/ui/Icons/Settings'
import { SearchField } from '@/shared/ui/SearchField'
import styles from './DesktopHeader.module.scss'

export const DesktopHeader = () => {
	return (
		<header className={styles['header']}>
			<div>
				<h2 className={styles['header__title']}>All Notes</h2>
			</div>
			<div className={styles['header__settings']}>
				<SearchField />
				<button onClick={() => alert('Settings')}>
					<Settings />
				</button>
			</div>
		</header>
	)
}
