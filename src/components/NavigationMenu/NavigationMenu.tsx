import Image from 'next/image'
import Link from 'next/link'

import AvatarIcon from '../../img/avatar.png';
import SettingsIcon from '../../icon/settings.svg';
import styles from './NavigationMenu.module.css'

export default function NavigationMenu() {
  return (
    <nav className={styles.navigation}>
      <Link className={styles.avatarWrapper} href="/">
        <Image className={styles.avatar} src={AvatarIcon} alt='User avatar photo' />
        <Link className={styles.settingsWrapper} href="/settings">
          <Image className={styles.settings} src={SettingsIcon} alt='settings icon' />
        </Link>
      </Link>
      <ul>
        <li>
          <Link href="/coming">Приход</Link>
        </li>
        <li>
          <Link href="/groups">Группы</Link>
        </li>
        <li>
          <Link href="/products">Продукты</Link>
        </li>
        <li>
          <Link href="/users">Пользователи</Link>
        </li>
        <li>
          <Link href="/settings">Настройки</Link>
        </li>
      </ul>
    </nav>
  )
}
