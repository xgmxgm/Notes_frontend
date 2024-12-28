import {
	type FC,
	type PropsWithChildren,
	type TextareaHTMLAttributes,
} from 'react'
import styles from './Textarea.module.scss'

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	state: string
	setState: (state: string) => void
}

export const Textarea: FC<PropsWithChildren<IProps>> = ({
	children,
	className,
	state,
	setState,
	...props
}) => {
	return (
		<textarea
			value={state}
			onChange={e => setState(e.target.value)}
			className={`${styles['text-area']} ${className}`}
			{...props}
		>
			{children}
		</textarea>
	)
}
