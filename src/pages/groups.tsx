import { useState } from 'react';
import Image from 'next/image';
import { orders, products } from '../pages/api/app';

import addGroupsIcon from '../icon/round-add-button.svg';
import hamburgerIcon from '../icon/hamburger-list-menu.svg'
import addProductIcon from '../icon/add-button.svg';
import deleteIcon from '../icon/delete.svg';
import photoProdIcon from '../img/monitor.jpg';
import styles from '@/styles/Groups.module.css'

const Groups = () => {
  const [prodList, setProdList] = useState([]);
  
  const getProductsList = (id: number) => {
    setProdList(() => products.filter((product) => product.order === id));
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
          {orders.map((order, i) => (
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
                <span>23</span>
                Продукта
              </p>
              <p className={styles.productDate}>
                <span>Время</span>
                {order.date}
              </p>
            </div>
          ))}
        </div>
        {prodList.length >= 1 && (
          <div className={styles.productWrapper}>
            <h2 className={styles.productTitle}>Все продукты</h2>
            <div className={styles.addProductWrapper}>
              <Image src={addProductIcon} alt='icon add product' />
              <p className={styles.addProductDes}>Добавить продукт</p>
            </div>
            {products.map((prod) => {
              const {
                id, 
                title,
                type,
                specification,
                guarantee,
                serialNumber,
                price
              } = prod;

              return (
                <div key={id} className={styles.productBox}>
                  <span className={styles.productBoxStatus} />
                  <Image className={styles.productBoxPhoto} src={photoProdIcon} alt="Photo product icon" />
                  <div className={styles.productBoxTypeWrapper}>
                    <p className={styles.productBoxType}>{type}</p>
                    <h6 className={styles.productBoxTitle}>{title}</h6>
                  </div>
                  <div className={styles.productBoxDescWrapper}>
                    <p className={styles.productBoxDescSpec}>{specification}</p>
                    <p className={styles.productBoxDescGuar}>Guarantee: {guarantee.end}</p>
                  </div>
                  <div className={styles.productBoxPriceWrapper}>
                    <p className={styles.productBoxPrice}>Price:
                      <span>
                        {price.map((p) => p.isDefault ? (` ${p.value} ${p.symbol}`) : '')}
                      </span>
                    </p>
                    <p className={styles.productBoxNumber}>Serial Number: {serialNumber}</p>
                  </div>
                  <Image className={styles.productBoxDelete} src={deleteIcon} alt="Delete icon" />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}

export default Groups;
