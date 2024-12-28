import { useEffect } from 'react'
import { Note } from '@/entities/Note'
import styles from './Home.module.scss'
import { useNavigate } from 'react-router-dom'
import { NotesTable } from '@/widgets/NotesTable'
import { useAppSelector } from '@/app/store/store'

export const HomePage = () => {
	const navigate = useNavigate()
	const isAuth = useAppSelector(state => state.isAuth)

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
