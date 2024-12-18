import { Button } from '@/shared/ui/Button'
import styles from './NotesTable.module.scss'
import { useNotes } from '@/app/store/storeNotes'
import { useUserStore } from '@/app/store/storeUser'
import { addNote, getAllNotes } from '@/entities/Note/api'
import { useEffect } from 'react'

export const NotesTable = () => {
	const { user } = useUserStore()
	const { setNotes, notes } = useNotes()

	const handleSubmit = () => {
		addNote(user.id!).then(notes => {
			console.log('notes table:', notes)
			setNotes(notes)
		})
	}

	useEffect(() => console.log(notes), [notes])

	return (
		<div className={styles['notes-table']}>
			<Button onClick={handleSubmit}>+ Create New Note</Button>
			<Button onClick={() => getAllNotes(user.id!)}>Get All Notes</Button>
		</div>
	)
}
