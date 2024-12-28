import isAuthReducer from './slices'
import noteReducer from '@/entities/Note/slice'
import userReducer from '@/entities/User/slice'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
	reducer: {
		isAuth: isAuthReducer,
		user: userReducer,
		note: noteReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
