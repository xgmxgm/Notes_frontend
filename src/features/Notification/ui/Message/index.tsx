import { type PropsWithChildren, type FC, useEffect } from 'react'
import styles from './Message.module.scss'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import { Check } from '@/shared/ui/Icons/Check'
import { Error } from '@/shared/ui/Icons/Error'

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
		}, 10000)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	return (
		<motion.div
			initial={{ opacity: 0, y: -200 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0 }}
			className={classNames(
				{ [styles.success]: success, [styles.error]: error },
				styles.message
			)}
		>
			{success ? <Check /> : <Error />}
			{children}
		</motion.div>
	)
}
