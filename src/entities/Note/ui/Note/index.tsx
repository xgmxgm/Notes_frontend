import { type FC } from 'react'
import styles from './Note.module.scss'
import { Button } from '@/shared/ui/Button'
import { Tag } from '@/shared/ui/Icons/Tag'
import { useNote } from '../../store/storeNote'
import { Textarea } from '@/shared/ui/Textarea'
import { Clock } from '@/shared/ui/Icons/Clock'

export const Note: FC = () => {
	const { note } = useNote()

	console.log(note)

	return (
		<div className={styles['note']}>
			<div className={styles['note__up']}>
				<Textarea
					placeholder='Title'
					className='font-bold text-3xl h-11'
				></Textarea>
				<div className={styles['note__tags']}>
					<div className={styles['note__tag-with-text']}>
						<Tag width={30} height={30} />
						<p>Tags</p>
						<Button>+ Add</Button>
					</div>
					{note.tags.length > 0 ? (
						note.tags.map((tag, index) => <p key={index}>{tag}</p>)
					) : (
						<p>No tags</p>
					)}
				</div>
				<div className={styles['note__date']}>
					<div className={styles['note__tag-with-text']}>
						<Clock width={30} height={30} />
						<p>Last edited</p>
					</div>
					<p>{note.date}</p>
				</div>
			</div>
			<div className={styles['note__center']}>
				<Textarea
					placeholder='Start typing'
					className='text-lg font-normal h-96'
				></Textarea>
			</div>
			<div className={styles['note__bottom']}>
				<Button>Save Note</Button>
				<Button>Cancel</Button>
			</div>
		</div>
	)
}
