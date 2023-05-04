import { useState } from 'react';
import Image from 'next/image';

import { products } from '@/pages/api/app';
import DeletePopUp from '@/components/DeletePopUp/DeletePopUp';

import photoProdIcon from '@/img/monitor.jpg';
import deleteIcon from '@/icon/delete.svg';
import styles from './Products.module.css';

interface Props {
  prodList: Product[]
};

interface Product {
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
}

const Products = ({ prodList = products }: Props) => {
  const [popUp, setPopUp] = useState<boolean>(false);
  const [deleteEl, setDeleteEl] = useState<Product>();

  const getCurrentElement = (id: number) => {
    const currentElement: Product | undefined = products
      .find((product): boolean => product.id === id);
      setDeleteEl(currentElement);
    }

    const openPopUp = () => setPopUp(true);

    const pullDataPopUp = (data: boolean) => setPopUp(data);

  return (
    <>
      {prodList.map((prod: Product) => {
        const {
          id,
          isNew,
          title,
          type,
          specification,
          guarantee,
          serialNumber,
          price
        } = prod;

        return (
          <div key={id} className={styles.productBox}>
            <span className={
              isNew ? [styles.statusBePresent] : [styles.statusAbsent]
            } />
            <Image
              className={styles.photo}
              src={photoProdIcon}
              alt="Photo product icon"
            />
            <div className={styles.typeWrapper}>
              <p className={styles.type}>{type}</p>
              <h6 className={styles.title}>{title}</h6>
            </div>
            <div className={styles.descWrapper}>
              <p className={styles.descSpec}>{specification}</p>
              <p className={styles.descGuar}>Guarantee: {guarantee.end}</p>
            </div>
            <div className={styles.priceWrapper}>
              <p className={styles.price}>Price:
                <span>
                  {price.map((p) => p.isDefault ? (` ${p.value} ${p.symbol}`) : '')}
                </span>
              </p>
              <p className={styles.number}>Serial Number: {serialNumber}</p>
            </div>
            <Image
              className={styles.delete}
              src={deleteIcon}
              alt="Delete icon"
              onClick={() => {
                getCurrentElement(id);
                openPopUp();
              }}
            />
          </div>
        )
      })}
      {popUp && (
        <DeletePopUp
          setPopUpClose={pullDataPopUp}
          deleteEl={deleteEl}
        />
      )}
    </>
  );
}

export default Products;
