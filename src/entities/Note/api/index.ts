import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
} from 'firebase/firestore'
import { INote } from '../types'

const db = getFirestore()

export const getAllNotes = async (userId: string) => {
	let datas: INote[] = []

	const querySnapshot = await getDocs(
		collection(doc(db, 'users', userId!), 'notes')
	)
	querySnapshot.forEach(doc => {
		const data = doc.data()
		datas.push(data as INote)
		console.log(data)
	})

	return datas
}

export const addNote = async (userId: string, noteData: INote) => {
	const docRef = collection(doc(db, 'users', userId), 'notes')

	// const noteData: INote = {
	// 	title: '',
	// 	data: '',
	// 	tags: [],
	// 	date: date.toString(),
	// }

	const noteRef = await addDoc(docRef, noteData)
	const noteSnap = await getDoc(noteRef)
	return noteSnap.data()
}
