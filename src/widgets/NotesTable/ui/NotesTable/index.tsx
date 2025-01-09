import { useEffect } from 'react'
import styles from './NotesTable.module.scss'
import { getAllNotes } from '@/entities/Note/api'
import { useNotes } from '@/app/store/storeNotes'
import { type INote } from '@/entities/Note/types'
import { useUserStore } from '@/app/store/storeUser'
import { CreateNoteButton, NoteCard } from '@/entities/Note'

export const NotesTable = () => {
	const { user } = useUserStore()
	const { setNotes, notes } = useNotes()

	useEffect(() => {
		getAllNotes(user.id!).then(notes => {
			setNotes(notes as INote[])
		})
	}, [])

	return (
		<div className={styles['notes-table']}>
			<div className={styles['notes-table__up']}>
				<CreateNoteButton />
			</div>
			<div className={styles['notes-table__bottom']}>
				<ul>
					{notes.length > 0 &&
						notes.map((note, index) => (
							<li key={index}>
								<NoteCard
									date={note.date}
									title={note.title}
									tags={note.tags}
								/>
							</li>
						))}
				</ul>
			</div>
		</div>
	)
}
