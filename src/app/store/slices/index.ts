import { createSlice } from '@reduxjs/toolkit'

const initialState: boolean = false

const isAuthSlice = createSlice({
	name: 'isAuth',
	initialState,
	reducers: {
		setIsAuth: (state, actions) => {
			state = actions.payload
		},
	},
})

export const { setIsAuth } = isAuthSlice.actions
export default isAuthSlice.reducer
