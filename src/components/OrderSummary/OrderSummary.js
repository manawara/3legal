import React, { useEffect } from 'react'
import styles from './OrderSummary.module.scss'
import image from '../../assets/chair.png'
import iconMinus from '../../assets/Minus.svg'
import iconPlus from '../../assets/Add.svg'
import { useCartContext } from '../../store/CartContext'
import { calculateCart } from '../../helpers'
const OrderSummary = () => {
  const { items, shipping, amount, addItem, deleteItem, updateAmount } = useCartContext()
  useEffect(() => {
    const amount = calculateCart({ shipping, items })
    updateAmount(amount)
  }, [items, shipping, updateAmount])
  return (
    <>
      {items &&
        items.map((product) => (
          <div className={styles.order} key={product.uid}>
            <img src={image} alt="icon" />

            <div className={styles['order-content']}>
              <p>{product.name}</p>
              <p>{product.description}</p>
              <div>
                <button onClick={() => deleteItem(product.uid)}>
                  <img src={iconMinus} alt="icon minus" />
                </button>
                <span>{product.count}</span>
                <button onClick={() => addItem(product)}>
                  <img src={iconPlus} alt="icon plus" />
                </button>
              </div>
            </div>
            <div className={styles['order-price']}>${product.price}</div>
          </div>
        ))}
      <div className={styles['order-info']}>
        <span>Shipping</span>
        <span>{shipping === 0 ? '$0' : '$' + shipping}</span>
      </div>
      <div className={styles['order-info']}>
        <span>Subtotal</span>
        <span>${amount.subtotal}</span>
      </div>
      <div className={styles['order-info']}>
        <span className={styles['order-total']}>Total</span>
        <span>${amount.total}</span>
      </div>
    </>
  )
}

export default OrderSummary
