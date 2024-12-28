import styles from './NotesTable.module.scss'
import { useAppSelector } from '@/app/store/store'
import { CreateNoteButton, NoteCard } from '@/entities/Note'

export const NotesTable = () => {
	const user = useAppSelector(state => state.user)

	return (
		<div className={styles['notes-table']}>
			<div className={styles['notes-table__up']}>
				<CreateNoteButton />
			</div>
			<div>
				<ul>
					{[].length > 0 &&
						[].map((note, index) => (
							<li key={index}>
								<NoteCard
									// date={note.date}
									// title={note.title}
									// tags={note.tags}
									date=''
									title=''
									tags={[]}
								/>
							</li>
						))}
				</ul>
			</div>
		</div>
	)
}
