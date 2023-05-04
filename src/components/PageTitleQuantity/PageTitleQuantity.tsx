import Image from 'next/image';

import addGroupsIcon from '@/icon/round-add-button.svg';
import styles from './PageTitleQuantity.module.css';

interface Props {
  title: string;
  quantity: number;
}

const PageTitleQuantity = ({ title = '', quantity = 0 }: Props) => {
  return (
    <div className={styles.addGroupsWrapper}>
      <button className={styles.addGroupsBtn}>
        <Image
          src={addGroupsIcon}
          alt='Round button for add new group'
        />
      </button>
      <h1 className={styles.addGroupsTitle}>{title} / {quantity}</h1>
    </div>
  )
}

export default PageTitleQuantity;
