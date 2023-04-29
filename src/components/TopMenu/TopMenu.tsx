import Logo from '../Logo/Logo';
import SearchInput from '../SearchInput/SearchInput';
import DataAndTime from '../DataAndTime/DataAndTime';

import styles from './TopMenu.module.css'

export default function TopMenu() {
  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <div className={styles.searchInputWrapper}>
        <SearchInput />
      </div>
      <div className={styles.dataWrapper}>
        <DataAndTime />
      </div>
    </div>
  )
}
