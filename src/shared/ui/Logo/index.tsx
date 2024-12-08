import { FC } from 'react'
import styles from './Logo.module.scss'
import { LogoIcon } from '../Icons/LogoIcon'

export const Logo: FC = () => {
	return (
		<div className={styles['logo']}>
			<div>
				<LogoIcon />
			</div>
			<p className={styles['logo__text']}>Notes</p>
		</div>
	)
}
