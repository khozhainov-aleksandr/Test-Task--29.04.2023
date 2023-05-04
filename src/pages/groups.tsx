import { useState } from 'react';
import Image from 'next/image';

import { orders, products } from '../pages/api/app';
import Products from '@/components/Products/Products';
import Orders from '@/components/Orders/Orders';

import addGroupsIcon from '../icon/round-add-button.svg';
import addProductIcon from '../icon/add-button.svg';
import styles from '@/styles/Groups.module.css'

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
};

const Groups = () => {
  const [prodList, setProdList] = useState<Product[]>([]);

  const pullProdList = (data: Product[]) => {
    setProdList(data);
  }

  return (
    <main className={styles.main}>
      <div className={styles.addGroupsWrapper}>
        <button className={styles.addGroupsBtn}>
          <Image
            src={addGroupsIcon}
            alt='Round button for add new group'
          />
        </button>
        <h1 className={styles.addGroupsTitle}>Группы / {orders.length}</h1>
      </div>
      <div className={styles.groupAndProductWrapper}>
        <Orders filterProdList={pullProdList} />
        {prodList.length >= 1 && (
          <div className={styles.productWrapper}>
            <h2 className={styles.productTitle}>Все продукты</h2>
            <div className={styles.addProductWrapper}>
              <Image src={addProductIcon} alt='icon add product' />
              <p className={styles.addProductDes}>Добавить продукт</p>
            </div>
            <Products prodList={prodList} />
          </div>
        )}
      </div>
    </main>
  )
}

export default Groups;
