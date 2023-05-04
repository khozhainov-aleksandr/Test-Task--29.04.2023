import Image from 'next/image';
import { orders, products } from '@/pages/api/app';

import hamburgerIcon from '@/icon/hamburger-list-menu.svg'
import styles from './Orders.module.css';

interface Props {
  filterProdList: Product[];
}

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

const Orders = ({ filterProdList }: Props) => {
  const prodSort = () => {
    const obj = {};

    products.forEach((el: Product) => {
      obj[el.order] = (obj[el.order] || 0) + 1;
    });

    return Object.entries(obj);
  }

  const getProductsList = (id: number) => {
    const newProdList: Product[] = products.filter((product): boolean => product.order === id);
    filterProdList(newProdList);
  }

  return (
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
  )
}

export default Orders;
