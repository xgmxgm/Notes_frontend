import { type FC } from 'react'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'

interface IProps {
	setShowModal: (showModal: boolean) => void
}

export const AddTagModal: FC<IProps> = ({ setShowModal }) => {
	return (
		<Modal title='Add Tag' setShowModal={setShowModal}>
			<Input />
			<Button>+ Add</Button>
		</Modal>
	)
}
