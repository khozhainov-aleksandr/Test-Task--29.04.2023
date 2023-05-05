import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { searchInput } from '../../../slices/counterSlice'

import styles from './SearchInput.module.css'

export default function SearchInput() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>('');

  dispatch(searchInput(search));

  return (
    <input
      className={styles.searchInput}
      type="text"
      name="Search"
      placeholder='Поиск'
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
  )
}
