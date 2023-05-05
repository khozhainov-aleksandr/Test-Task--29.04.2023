import { useState } from 'react';
import { useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form';
import type { RootState } from '../store'
import { products } from '@/pages/api/app';
import PageTitleQuantity from '@/components/PageTitleQuantity/PageTitleQuantity';
import Products from '@/components/Products/Products'

import styles from '@/styles/ProductsPage.module.css'

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

export default function ProductsPage() {
  const searchInput = useSelector((state: RootState) => state.searchInput.value);
  const [specif, setSpecif] = useState<string>('');
  const [brand, setBrand] = useState<string>('');

  const filterProducts = products.filter((prod) => (
    prod.title.toLowerCase().includes(searchInput.toLowerCase())
    && prod.specification.includes(specif)
    && prod.title.includes(brand)
  ));

  const getInputChoice = (value: string) => {
    let str: string = ''
    products.forEach((el: any) => str += el[value] + '•');
    
    const arrDub = str
      .split('•')
      .map((el) => el.trim())
      .filter((el) => el !== '');
  
    const arrRemoveDub = arrDub
      .filter((item, i) => arrDub.indexOf(item) == i).sort();

    return arrRemoveDub;
  }

  const specificationArr = getInputChoice('specification');
  const brandArr = getInputChoice('title');

  return (
    <main className={styles.main}>
      <PageTitleQuantity
        title='Продукты'
        quantity={products.length}
      />
      <div className={styles.formsWrapper}>
        <div className={styles.formWrapper}>
          Бренд монитора: 
          <Form.Select
            size="sm"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          >
            <option value=''>Выбор бренда</option>
            {brandArr.map((br, i) => (
              <option key={i} value={br}>
                {br}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className={styles.formWrapper}>
          Спецификация монитора: 
          <Form.Select
            size="sm"
            onChange={(event) => {
              setSpecif(event.target.value);
            }}
          >
            <option value=''>Выбор спецификации</option>
            {specificationArr.map((spec, i) => (
              <option key={i} value={spec}>
                {spec}
              </option>
            ))}
          </Form.Select>
        </div>
      </div>


      <Products
        fullProductsList={true}
        prodList={filterProducts}
      />
    </main>
  )
}
