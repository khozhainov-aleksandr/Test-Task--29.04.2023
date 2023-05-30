import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'
import classnames from 'classnames';

import AvatarIcon from '../../img/avatar.png';
import SettingsIcon from '../../icon/settings.svg';
import styles from './NavigationMenu.module.css'

const linkForRouting = [
  { title: 'coming', showName: 'Incoming' },
  { title: 'groups', showName: 'Groups' },
  { title: 'products', showName: 'Products' },
  { title: 'users', showName: 'Users' },
  { title: 'settings', showName: 'Settings' },
];

const NavigationMenu = () => {
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
          return (
            <li
              key={i}
              className={classnames({
                [styles.activeLink]: activeLink === `/${link.title}`
              })}
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
