import { initializeApp } from 'firebase/app'

const firebaseConfig = {
	apiKey: 'AIzaSyA6E2eQbF7eD-xmMNmxaAZE-3naj6FF7ps',
	authDomain: 'notes-33c51.firebaseapp.com',
	databaseURL:
		'https://notes-33c51-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'notes-33c51',
	storageBucket: 'notes-33c51.firebasestorage.app',
	messagingSenderId: '914559252076',
	appId: '1:914559252076:web:e789782f3996c66f650a49',
}

export const app = initializeApp(firebaseConfig)

export default app
