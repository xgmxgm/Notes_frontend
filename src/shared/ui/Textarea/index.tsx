import {
	type FC,
	type PropsWithChildren,
	type TextareaHTMLAttributes,
} from 'react'
import styles from './Textarea.module.scss'

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: FC<PropsWithChildren<IProps>> = ({
	children,
	className,
	...props
}) => {
	return (
		<textarea className={`${styles['text-area']} ${className}`} {...props}>
			{children}
		</textarea>
	)
}
