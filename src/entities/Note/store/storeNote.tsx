import { create } from 'zustand'
import { type INote } from '../types'
import { persist } from 'zustand/middleware'

interface ICurrentNotes {
	note: INote
	setNote: (note: INote) => void
	clearNote: () => void
}

const date = new Date()

export const useNote = create<ICurrentNotes>()(
	persist(
		set => ({
			note: { title: '', data: '', tags: [], date: date.toString() },
			setNote: note => set(() => ({ note: note })),
			clearNote: () => set(() => ({ note: {} as INote })),
		}),
		{ name: 'currentNote-storage' }
	)
)
