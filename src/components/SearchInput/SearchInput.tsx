'use client';
import { useState } from 'react';

import styles from './SearchInput.module.css'

export default function SearchInput() {
  const [search, setSearch] = useState('');

  console.log('search =', search);

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
