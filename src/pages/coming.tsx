import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import { products } from '@/pages/api/app';
import PageTitleQuantity from '@/components/PageTitleQuantity/PageTitleQuantity';
import Products from '@/components/Products/Products'

import styles from '@/styles/Coming.module.css'

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

export default function Coming() {
  const searchInput = useSelector((state: RootState) => state.searchInput.value);

  const filterProducts = products.filter((prod) => (
    prod.title.toLowerCase().includes(searchInput.toLowerCase())
  ));

  return (
    <main className={styles.main}>
      <PageTitleQuantity
        title='Приходы'
        quantity={products.length}
      />
      <Products prodList={filterProducts} />
    </main>
  )
}
