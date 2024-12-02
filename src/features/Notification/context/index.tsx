import React, { createContext, useContext } from 'react'

interface INotificationContextType {
	setError: React.Dispatch<React.SetStateAction<string | null>>
	setSuccess: React.Dispatch<React.SetStateAction<string | null>>
}

export const NotificationContext = createContext<INotificationContextType>({
	setError: () => {},
	setSuccess: () => {},
})

export const useNotificationContext = () => {
	return useContext(NotificationContext)
}
