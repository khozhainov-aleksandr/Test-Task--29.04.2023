import TopMenu from '../components/TopMenu/TopMenu';
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <TopMenu />
      </header>
      <main className={styles.main}>
        Content !!!
      </main>
    </>
  )
}
