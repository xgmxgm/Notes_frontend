import { router } from '@/shared/libs/react-router-dom'
import { RouterProvider } from 'react-router-dom'
import '@/shared/libs/firebase/init/index'

function App() {
	return <RouterProvider router={router} />
}

export default App
