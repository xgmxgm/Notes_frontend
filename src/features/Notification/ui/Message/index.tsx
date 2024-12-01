import { type PropsWithChildren, type FC, useEffect } from 'react'
import styles from './Message.module.scss'
import { motion } from 'framer-motion'

interface IProps {
	success?: boolean
	error?: boolean
}

export const Message: FC<PropsWithChildren<IProps>> = ({
	children,
	success,
	error,
}) => {
	useEffect(() => {
		const timer = setTimeout(() => {}, 5000)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	return (
		<motion.div
			initial={{ opacity: 0, y: -200 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
	)
}
