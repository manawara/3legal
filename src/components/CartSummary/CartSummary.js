import React, { useEffect, useState } from 'react'
import { InputRadio } from '../Input/Input'
import Button from '../Button/Button'
import styles from '../CartSummary/CartSummary.module.scss'
import Cart from '../../layout/Cart'
import { useCartContext } from '../../store/CartContext'
import { calculateCart } from '../../helpers.js'

const CartSummary = ({ title }) => {
  const { updateShipping, updateStatus, updateAmount, items, amount, shipping } = useCartContext()

  useEffect(() => {
    const amount = calculateCart({ shipping, items })
    updateAmount(amount)
  }, [items, shipping, updateAmount])
  const handleCheckout = () => {
    updateStatus('checkout', 2)
  }
  return (
    <Cart title={title}>
      <div className={styles['cart-summary']}>
        <InputRadio
          name="shipping"
          label="Free shipping"
          checked
          price="$0.00"
          onAction={updateShipping}
          defaultValue={0}
        />
        <InputRadio name="shipping" label="Express shipping" price="+$15.00" onAction={updateShipping} value={15} />
        <div className={styles['cart-summary-subtotal']}>
          <span>subtotal</span>
          <span>
            <strong>${amount.subtotal}</strong>
          </span>
        </div>
        <div className={styles['cart-summary-total']}>
          <span>total</span>
          <span>
            <strong>${amount.total}</strong>
          </span>
        </div>
        <Button onAction={handleCheckout}>Checkout</Button>
      </div>
    </Cart>
  )
}

export default CartSummary
