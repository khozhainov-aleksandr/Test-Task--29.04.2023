import Image from 'next/image';
import productImage from '../../img/monitor.jpg';
import deleteIcon from '../../icon/delete-red.svg';
import styles from './DeletePopUp.module.css';

const DeletePopUp = () => {
  const getClosePopUp = () => {
    console.log('✅', 'Close Pop-Up');
  }

  const getCancelProd = () => {
    console.log('✅', 'Cancel');
  }

  const getDeleteProd = () => {
    console.log('✅', 'Delete');
  }

  return (
    <div className={styles.popUpWrapper}>
      <div className={styles.popUp}>
        <button className={styles.closeBtn} onClick={getClosePopUp}>
          X
        </button>
        <h6 className={styles.popUpTitle}>
          Вы уверены, что хотите удалить этот приход?
        </h6>
        <div className={styles.prodCard}>
          <span className={styles.prodCardStatus} />
          <Image className={styles.prodCardImg} src={productImage} alt="Image product" />
          <div className={styles.prodCardDesWrapper}>
            <p className={styles.prodCardDes}>
              Монитор 28&quot; Samsung Odyssey G7 S28AG702 4K HDR400 / IPS 8-Bit / 144Гц
            </p>
            <p className={styles.prodCardSerNum}>
              Serial Number: 3425
            </p>
          </div>
        </div>
        <div className={styles.actionChoice}>
          <div className={styles.cancelAction} onClick={getCancelProd}>
            Отменить
          </div>
          <div className={styles.deleteAction} onClick={getDeleteProd}>
            <Image className={styles.deleteIcon} src={deleteIcon} alt="Delete icon" />
            Удалить
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeletePopUp;