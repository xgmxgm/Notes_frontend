import { useAppDispatch } from '@/app/store/store'
import { type INote } from '../../types'
import { Button } from '@/shared/ui/Button'
import { setNote } from '../../slice'

export const CreateNoteButton = () => {
	const dispatch = useAppDispatch()

	const createNewNote = () => {
		const date = new Date()

		const options: Intl.DateTimeFormatOptions = {
			day: '2-digit',
			month: 'short',
			year: 'numeric',
		}

		const formattedDate = date.toLocaleDateString('en-GB', options)

		const newNote: INote = {
			title: '',
			tags: [],
			data: '',
			date: formattedDate,
		}

		dispatch(setNote(newNote))
	}

	return <Button onClick={createNewNote}>+ Create New Note</Button>
}
