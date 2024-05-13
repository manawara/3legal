import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ProductCart from '../../components/ProductCart/ProductCart'
import CartSummary from '../../components/CartSummary/CartSummary'
import Checkout from '../../components/Checkout/Checkout'
import styles from './ShoppingCart.module.scss'
import { useCartContext } from '../../store/CartContext'

const ShoppingCart = () => {
  const { items, status } = useCartContext()

  return (
    <div className={styles.shoppingCart}>
      <NavBar title="Cart" />
      <div className={styles['shoppingCart-content']}>
        {items.length > 0 ? (
          <>
            {status === 'shoppingcart' && <ProductCart />}
            {status === 'shoppingcart' && <CartSummary title="Cart Summary" />}
            {status === 'checkout' && <Checkout />}
          </>
        ) : (
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Shopping cart is empty! You will must product.</p>
        )}
      </div>
    </div>
  )
}

export default ShoppingCart
