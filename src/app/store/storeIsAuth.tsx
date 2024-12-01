import { persist } from 'zustand/middleware'
import { create } from 'zustand'

interface IStore {
	isAuth: boolean
	setAuth: (isAuth: boolean) => void
}

export const useIsAuth = create<IStore>()(
	persist(
		set => ({
			isAuth: false,
			setAuth: (payload: boolean) => set(() => ({ isAuth: payload })),
		}),
		{ name: 'isAuth-storage' }
	)
)
