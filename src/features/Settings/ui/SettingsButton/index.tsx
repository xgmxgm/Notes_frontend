import { useState } from 'react'
import { SettingsModal } from '../SettingsModal'
import styles from './SettingsButton.module.scss'
import { Settings } from '@/shared/ui/Icons/Settings'

export const SettingsButton = () => {
	const [selectIsShow, setSelectIsShow] = useState<boolean>(false)

	return (
		<div className={styles['settings-button']}>
			<button onClick={() => setSelectIsShow(!selectIsShow)}>
				<Settings />
			</button>
			{selectIsShow && <SettingsModal />}
		</div>
	)
}
