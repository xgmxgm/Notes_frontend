import { type PropsWithChildren, type FC, useEffect } from 'react'
import styles from './Message.module.scss'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import { createPortal } from 'react-dom'

interface IProps {
	success?: boolean
	error?: boolean
	messageVisibleHandler: (state: any) => void
}

export const Message: FC<PropsWithChildren<IProps>> = ({
	messageVisibleHandler,
	children,
	success,
	error,
}) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			messageVisibleHandler(null)
		}, 4000)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	return createPortal(
		<motion.div
			initial={{ opacity: 0, y: -200 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0 }}
			className={classNames(
				{ [styles.success]: success, [styles.error]: error },
				styles.message
			)}
		>
			{children}
		</motion.div>
		document.getElementById('overlay') as HTMLElement
	)
}
