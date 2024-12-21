import { useIsAuth } from '@/app/store/storeIsAuth'
import { NotesTable } from '@/widgets/NotesTable'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'
import { Note } from '@/entities/Note'
import { useEffect } from 'react'

export const HomePage = () => {
	const navigate = useNavigate()
	const { isAuth } = useIsAuth()

	useEffect(() => {
		if (!isAuth) navigate('/authorize')
	})

	if (!isAuth) return

	return (
		<div className={styles['home']}>
			<div className={styles['home__left-col']}>
				<NotesTable />
			</div>
			<div className={styles['home__right-col']}>
				<Note />
			</div>
		</div>
	)
}
