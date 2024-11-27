import notesImgSrc from '@/../public/images/notes_app.webp'
import { SignUp } from '@/features/Authorize/ui/SignUp'
import styles from './AuhorizePage.module.scss'
import { SignIn } from '@/features/Authorize'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const AuthorizePage = () => {
	const [isSignIn, setIsSignIn] = useState<boolean>(true)

	return (
		<div className={styles['authorize-page']}>
			<div className={styles['authorize-page__actions']}>
				{isSignIn ? (
					<SignIn setIsSignIn={setIsSignIn} />
				) : (
					<SignUp setIsSignIn={setIsSignIn} />
				)}
			</div>
			<div className={styles['authorize-page__landing']}>
				<div className={styles['authorize-page__heading']}>
					<h1 className={styles['authorize-page__title']}>Notes Application</h1>
				</div>
				<motion.img
					drag
					whileTap={{ scale: 0.99 }}
					whileHover={{ scale: 1.01 }}
					dragConstraints={{
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
					}}
					transition={{ type: 'spring', stiffness: 100 }}
					src={notesImgSrc}
					width={1920}
					height={1080}
					alt='notes preview'
					className={styles['authorize-page__img']}
				/>
			</div>
		</div>
	)
}
