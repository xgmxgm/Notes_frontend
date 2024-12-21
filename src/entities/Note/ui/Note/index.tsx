import { type FC } from 'react'
import styles from './Note.module.scss'
import { useNote } from '../../store/storeNote'
import { Textarea } from '@/shared/ui/Textarea'

export const Note: FC = () => {
	const { note } = useNote()

	return (
		<div className={styles['note']}>
			<div className={styles['note__up']}>
				{/* <p>{note.title}</p> */}
				<Textarea placeholder='Title' className='font-extrabold'></Textarea>
				<div className={styles['note__tags']}>
					{note.tags.length > 0 ? (
						note.tags.map((tag, index) => <p key={index}>{tag}</p>)
					) : (
						<p>no tags</p>
					)}
				</div>
				<p>{note.date}</p>
			</div>
			<div className={styles['note__center']}>{note.data}</div>
			<div className={styles['note__bottom']}>footer</div>
		</div>
	)
}
