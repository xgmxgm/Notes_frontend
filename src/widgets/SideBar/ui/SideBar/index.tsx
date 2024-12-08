import { Logo } from '@/shared/ui/Logo'
import styles from './SideBar.module.scss'
import { Zip } from '@/shared/ui/Icons/Zip'
import { Section } from '@/shared/ui/Section'
import { Home } from '@/shared/ui/Icons/Home'

export const SideBar = () => {
	return (
		<div className={styles['side-bar']}>
			<div className={styles['side-bar__logo']}>
				<Logo />
			</div>
			<div className={styles['side-bar__notes']}>
				<Section icon={<Home />} text='All Notes' />
				<Section icon={<Zip />} text='Archived Notes' />
			</div>
			<div className={styles['side-bar__tags']}>
				<p className='text-gray-600'>Tags</p>
			</div>
		</div>
	)
}
