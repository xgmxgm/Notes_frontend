import { useState } from 'react'

export const useNotification = () => {
	const [error, setError] = useState<string | null>(null)
	const [success, setSuccess] = useState<string | null>(null)

	const successNotification = () => {}

	const errorNotification = () => {}

	return { successNotification, errorNotification }
}
