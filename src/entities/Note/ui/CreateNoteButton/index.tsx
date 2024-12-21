import { type INote } from '../../types'
import { Button } from '@/shared/ui/Button'
import { useNote } from '../../store/storeNote'

export const CreateNoteButton = () => {
	const { setNote } = useNote()

	const createNewNote = () => {
		const date = new Date()

		const note: INote = {
			title: '',
			tags: [],
			data: '',
			date: date.toString(),
		}

		setNote(note)
	}

	return <Button onClick={createNewNote}>+ Create New Note</Button>
}
