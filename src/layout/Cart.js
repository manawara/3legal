import React from 'react'
import styles from './Cart.module.scss'
const Cart = ({ children, title }) => {
  return (
    <div className={styles['cart']}>
      <div className={styles['cart-title']}>{title}</div>
      {children}
    </div>
  )
}

export default Cart
