import { create } from 'zustand'
import { type INote } from '../types'
import { persist } from 'zustand/middleware'

interface ICurrentNotes {
	note: INote
	setNote: (note: INote) => void
	clearNote: () => void
}

export const useNote = create<ICurrentNotes>()(
	persist(
		set => ({
			note: { title: '', data: '', tags: [], date: '' },
			setNote: note => set(() => ({ note: note })),
			clearNote: () => set(() => ({ note: {} as INote })),
		}),
		{ name: 'currentNote-storage' }
	)
)
