import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type INote } from '@/entities/Note/types'

interface INotes {
	notes: INote[]
	clearNotes: () => void
	setNotes: (notes: INote[]) => void
}

export const useNotes = create<INotes>()(
	persist(
		set => ({
			notes: [],
			setNotes: (payloadNotes: INote[]) => set(() => ({ notes: payloadNotes })),
			clearNotes: () => set(() => ({ notes: [] })),
		}),
		{ name: 'notes-storage' }
	)
)
