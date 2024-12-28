import { IUser } from '../types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IUser = { id: '', email: '' }

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			console.log('userSlice: ', action.payload)
			state.id = action.payload.id
			state.email = action.payload.email
			console.log('userSlice/state: ', state)
			return state
		},
		clearUser: state => {
			state.id = ''
			state.email = ''
		},
	},
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
