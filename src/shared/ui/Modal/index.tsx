import styles from './Modal.module.scss'
import { type FC, type PropsWithChildren } from 'react'

interface IProps {
	title: string
	setShowModal: (showModal: boolean) => void
}

export const Modal: FC<PropsWithChildren<IProps>> = ({
	title,
	children,
	setShowModal,
}) => {
	return (
		<div className={styles['modal']} onClick={() => setShowModal(false)}>
			<div
				className={styles['modal__wrapper']}
				onClick={e => e.stopPropagation()}
			>
				<div className={styles['modal__title']}>{title}</div>
				<div className={styles['modal__content']}>{children}</div>
			</div>
		</div>
	)
}
