import { type FC } from 'react'
import styles from './NoteCard.module.scss'
import { type INote } from '@/entities/Note/types'

interface IProps extends Omit<INote, 'data'> {}

export const NoteCard: FC<IProps> = ({ title, date, tags }) => {
	return (
		<div className={styles['note-card']}>
			<div className={styles['note-card__title']}>
				<h2>{title}</h2>
			</div>
			<div className={styles['note-card__tags']}>
				{tags.map((tag, index) => (
					<p key={index}>{tag}</p>
				))}
			</div>
			<div className={styles['note-card__date']}>
				<p>{date}</p>
			</div>
		</div>
	)
}
