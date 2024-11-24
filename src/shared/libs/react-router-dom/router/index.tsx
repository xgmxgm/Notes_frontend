import { createBrowserRouter } from 'react-router-dom'
import { AuthorizePage } from '@/pages/Authorize'
import { HomePage } from '@/pages/Home'

export const router = createBrowserRouter([
	{
		index: true,
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/authorize',
		element: <AuthorizePage />,
	},
])
