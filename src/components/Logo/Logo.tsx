import Link from 'next/link';
import Image from 'next/image';

import ShieldIcon from '../../icon/shield.svg';
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <Link className={styles.logo} href="/">
      <Image
        className={styles.mainLogo}
        src={ShieldIcon}
        alt="Main logo, Green shield"
      />
      <h3 className={styles.logoTitle}>Inventory</h3>
    </Link>
  )
}
