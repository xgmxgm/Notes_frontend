import { FC, PropsWithChildren } from 'react'
import { SideBar } from '@/widgets/SideBar'
import styles from './Layout.module.scss'
import { Header } from '@/widgets/Header'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles['layout']}>
			<div className={styles['layout__side-bar']}>
				<SideBar />
			</div>
			<div className={styles['layout__content']}>
				<Header />
				{children}
			</div>
		</div>
	)
}
