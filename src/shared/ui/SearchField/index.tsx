import { FC, InputHTMLAttributes, useState } from 'react'
import styles from './SearchField.module.scss'
import { Search } from '../Icons/Search'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export const SearchField: FC<IProps> = ({ ...props }) => {
	const [searchFieldValue, setSearchFieldValue] = useState<string>('')

	return (
		<div className={styles['search']}>
			<label htmlFor='input'>
				<div className={styles['search__search-icon']}>
					<Search />
				</div>
			</label>
			<input
				id='input'
				className={styles['search__input']}
				type='text'
				placeholder='Search by title, content, or tags...'
				onChange={e => setSearchFieldValue(e.currentTarget.value)}
				{...props}
			/>
		</div>
	)
}
