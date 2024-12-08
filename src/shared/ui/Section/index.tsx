import React, { FC } from 'react'
import styles from './Section.module.scss'

interface IProps {
	icon: React.ReactNode
	text: string
}

export const Section: FC<IProps> = ({ icon, text }) => {
	return (
		<button className={styles['section']}>
			{icon}
			<p className={styles['section__text']}>{text}</p>
		</button>
	)
}
