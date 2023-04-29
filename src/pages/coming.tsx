import TopMenu from '@/components/TopMenu/TopMenu';
import NavigationMenu from '@/components/NavigationMenu/NavigationMenu';

import styles from '@/styles/Home.module.css'

export default function Coming() {
  return (
    <>
      <header className={styles.header}>
        <TopMenu />
      </header>
      <main className={styles.main}>
        <NavigationMenu />
        Coming
      </main>
    </>
  )
}
