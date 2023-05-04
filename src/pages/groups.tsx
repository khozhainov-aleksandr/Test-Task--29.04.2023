import { useState } from 'react';
import Image from 'next/image';

import { orders, products } from '../pages/api/app';
import Products from '@/components/Products/Products';

import addGroupsIcon from '../icon/round-add-button.svg';
import hamburgerIcon from '../icon/hamburger-list-menu.svg'
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

  const prodSort = () => {
    const obj = {};

    products.forEach((el: Product) => {
      obj[el.order] = (obj[el.order] || 0) + 1;
    });

    return Object.entries(obj);
  }
  
  const getProductsList = (id: number) => {
    const newProdList: Product[] = products.filter((product): boolean => product.order === id);
    setProdList(newProdList);
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
        <div className={styles.groupWrapper}>
          {orders.map((order, i) => {
            let countProd: number = 0;

            prodSort().forEach(prod => {
              order.id === Number(prod[0]) && (countProd = prod[1])
            });

            return (
              <div key={i} className={styles.groupBox}>
                <button
                  className={styles.hamburgerBtn}
                  onClick={(e) => {
                    getProductsList(order.id);
                  }}
                >
                  <Image src={hamburgerIcon} alt='Hamburger Icon' />
                </button>
                <p className={styles.productQuantity}>
                  <span>{countProd}</span>
                  Продукта
                </p>
                <p className={styles.productDate}>
                  <span>Время</span>
                  {order.date}
                </p>
              </div>
            )
          })}
        </div>
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
