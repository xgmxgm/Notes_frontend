import { createBrowserRouter } from 'react-router-dom'
import { AuthorizePage } from '@/pages/Authorize'
import { HomePage } from '@/pages/Home'

export const router = createBrowserRouter(
	[
		{
			index: true,
			path: '/',
			element: <HomePage />,
		},
		{
			path: '/authorize',
			element: <AuthorizePage />,
		},
	],
	{
		future: {
			v7_fetcherPersist: true,
			v7_normalizeFormMethod: true,
			v7_partialHydration: true,
			v7_relativeSplatPath: true,
			v7_skipActionErrorRevalidation: true,
		},
	}
)
