import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'

import AvatarIcon from '../../img/avatar.png';
import SettingsIcon from '../../icon/settings.svg';
import styles from './NavigationMenu.module.css'

const NavigationMenu: React.FC = () => {
  const router = useRouter();
  const activeLink: string = router.pathname;

  return (
    <nav className={styles.navigation}>
      <Link className={styles.avatarWrapper} href="/">
        <Image
          className={styles.avatar}
          src={AvatarIcon}
          alt='User avatar photo'
          priority
        />
        <div className={styles.settingsWrapper}>
          <Image
            className={styles.settings}
            src={SettingsIcon}
            alt='settings icon'
          />
        </div>
      </Link>
      <ul>
        <li className={activeLink === '/coming' ? [styles.activeLink] : ''}>
          <Link href="/coming">Приход</Link>
        </li>
        <li className={activeLink === '/groups' ? [styles.activeLink] : ''}>
          <Link href="/groups">Группы</Link>
        </li>
        <li className={activeLink === '/products' ? [styles.activeLink] : ''}>
          <Link href="/products">Продукты</Link>
        </li>
        <li className={activeLink === '/users' ? [styles.activeLink] : ''}>
          <Link href="/users">Пользователи</Link>
        </li>
        <li className={activeLink === '/settings' ? [styles.activeLink] : ''}>
          <Link href="/settings">Настройки</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationMenu;
