import { FC, PropsWithChildren } from 'react'
import styles from './Layout.module.scss'
import { SideBar } from '@/widgets/SideBar'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles['layout']}>
			<div>
				<SideBar />
			</div>
			<div>{children}</div>
		</div>
	)
}
