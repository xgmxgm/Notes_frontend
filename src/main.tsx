import '@/shared/libs/firebase/init/index'
import App from '@/app/App'
import './app/styles/index.css'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import { createRoot } from 'react-dom/client'
import { NotificationContextProvider } from './features/Notification'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<NotificationContextProvider>
			<App />
		</NotificationContextProvider>
	</Provider>
)
