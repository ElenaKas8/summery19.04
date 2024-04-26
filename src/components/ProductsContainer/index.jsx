import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../requests/products_req'
import ProductCard from '../ProductCard';
import s from './index.module.css'

export default function ProductsContainer() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    getAllProducts(setProducts)
  }, []);
  // если [] пустой, то функция будет вызвана только один раз при перезагрузке компонента

  const deleteProduct = product_id => setProducts(products.filter(el => el.id !== product_id));

  return (
    <div className={s.container}>
      {
        products.map(el => <ProductCard key={el.id} {...el} deleteProduct={deleteProduct} />)
      }
    </div>
  )
}
