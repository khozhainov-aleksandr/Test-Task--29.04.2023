import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'

import AvatarIcon from '../../img/avatar.png';
import SettingsIcon from '../../icon/settings.svg';
import styles from './NavigationMenu.module.css'

const linkForRouting = [
  { title: 'coming', showName: 'Приход' },
  { title: 'groups', showName: 'Группы' },
  { title: 'products', showName: 'Продукты' },
  { title: 'users', showName: 'Пользователи' },
  { title: 'settings', showName: 'Настройки' },
];

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
        {linkForRouting.map((link, i) => {
          const choiceClass = activeLink === `/${link.title}`
          ? [styles.activeLink]
          : ''

          return (
            <li
              key={i}
              className={choiceClass}
            >
              <Link href={`/${link.title}`}>
                {link.showName}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavigationMenu;
