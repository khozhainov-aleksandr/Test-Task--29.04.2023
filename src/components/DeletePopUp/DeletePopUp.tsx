import Image from 'next/image';

import productImage from '../../img/monitor.jpg';
import deleteIcon from '../../icon/delete-red.svg';
import styles from './DeletePopUp.module.css';

interface Props {
  setPopUpClose: any;
  deleteEl: {
    id: number;
    serialNumber: number;
    isNew: number;
    photo: string;
    title: string;
    type: string;
    specification: string;
    guarantee: { start: string; end: string; }
    price: { value: number; symbol: string; isDefault: number; }[]
    order: number;
    date: string;
  };
}

const DeletePopUp = ({ setPopUpClose, deleteEl }: Props) => {
  const {type, title, serialNumber} = deleteEl;

  const getClosePopUp = () => setPopUpClose(false);

  const getCancelProd = () => alert('Cancel');

  const getDeleteProd = () => alert('Delete');

  return (
    <div className={styles.popUpWrapper}>
      <div className={styles.popUp}>
        <button className={styles.closeBtn} onClick={getClosePopUp}>
          X
        </button>
        <h6 className={styles.popUpTitle}>
          Are you sure you want to delete this entry?
        </h6>
        <div className={styles.prodCard}>
          <span className={styles.prodCardStatus} />
          <Image className={styles.prodCardImg} src={productImage} alt="Image product" />
          <div className={styles.prodCardDesWrapper}>
            <p className={styles.prodCardDes}>
              {type}: {title}
            </p>
            <p className={styles.prodCardSerNum}>
              Serial Number: {serialNumber}
            </p>
          </div>
        </div>
        <div className={styles.actionChoice}>
          <div className={styles.cancelAction} onClick={getCancelProd}>
            Cancel
          </div>
          <div className={styles.deleteAction} onClick={getDeleteProd}>
            <Image className={styles.deleteIcon} src={deleteIcon} alt="Delete icon" />
            Delete
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeletePopUp;