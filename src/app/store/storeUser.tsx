import { persist } from 'zustand/middleware'
import { create } from 'zustand'

interface IUser {
	id: string | null
	email: string | null
}

interface IStore {
	user: IUser
	setUser: (user: IUser) => void
	removeUser: () => void
}

export const useUserStore = create<IStore>()(
	persist(
		set => ({
			user: {
				id: null,
				email: null,
			},
			setUser: (payloadUser: IUser) => set(() => ({ user: payloadUser })),
			removeUser: () => set({ user: {} as IUser }),
		}),
		{ name: 'user-storage' }
	)
)
