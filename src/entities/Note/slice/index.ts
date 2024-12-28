import { INote } from '../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: INote = {
	title: '',
	data: '',
	date: '',
	tags: [],
}

const noteSlice = createSlice({
	name: 'note',
	initialState,
	reducers: {
		setNote: (state, action: PayloadAction<INote>) => {
			state = action.payload
		},
	},
})

export const { setNote } = noteSlice.actions
export default noteSlice.reducer
