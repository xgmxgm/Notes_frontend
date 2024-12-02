import { NotificationContextProvider } from './features/Notification'
import { createRoot } from 'react-dom/client'
import '@/shared/libs/firebase/init/index'
import './app/styles/index.css'
import App from '@/app/App'

createRoot(document.getElementById('root')!).render(
	<NotificationContextProvider>
		<App />
	</NotificationContextProvider>
)
