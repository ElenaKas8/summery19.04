import React from 'react'
import s from './index.module.css'
import { MdOutlineClose } from "react-icons/md";

export default function ProductCard({ id, title, price, thumbnail, deleteProduct }) {
  return (
    <div className={s.card}>
      <MdOutlineClose onClick={() => deleteProduct(id)} />
      <img src={thumbnail} alt={title} />
      <p>{ title }</p>
      <p>{ price }$</p>
    </div>
  )
}
