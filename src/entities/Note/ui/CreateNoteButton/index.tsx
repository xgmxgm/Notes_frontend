import { type INote } from '../../types'
import { Button } from '@/shared/ui/Button'
import { useNote } from '../../store/storeNote'

export const CreateNoteButton = () => {
	const { setNote } = useNote()

	const createNewNote = () => {
		const date = new Date()
		const options: Intl.DateTimeFormatOptions = {
			day: '2-digit',
			month: 'short',
			year: 'numeric',
		}
		const formattedDate = date.toLocaleDateString('en-GB', options)

		const note: INote = {
			title: '',
			tags: [],
			data: '',
			date: formattedDate,
		}

		setNote(note)
	}

	return <Button onClick={createNewNote}>+ Create New Note</Button>
}
