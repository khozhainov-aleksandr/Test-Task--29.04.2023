import { products } from '@/pages/api/app';
import PageTitleQuantity from '@/components/PageTitleQuantity/PageTitleQuantity';
import Products from '@/components/Products/Products'

import styles from '@/styles/Home.module.css'

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
  return (
    <main className={styles.main}>
      <PageTitleQuantity
        title='Приходы'
        quantity={products.length}
      />
      <Products />
    </main>
  )
}
