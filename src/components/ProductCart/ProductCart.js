import React from 'react'
import styles from './ProductCart.module.scss'
import iconMinus from '../../assets/Minus.svg'
import iconAdd from '../../assets/Add.svg'
import iconClose from '../../assets/Close.svg'
import { useCartContext } from '../../store/CartContext'
import useResize from '../../hooks/useResize'

const ProductCart = () => {
  const { items, status, addItem, deleteItem, deleteProduct } = useCartContext()
  const width = useResize()

  if (width > 768) {
    return (
      <table className={styles.productCart}>
        <thead>
          <tr className={styles['productCart-head']}>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>

        {items.map((product) => (
          <tbody key={product.uid}>
            <tr className={styles['productCart-row']}>
              <td>
                <div className={styles['productCart-product']}>
                  <img src={`http://localhost:1337${product.image.data.attributes.url}`} />
                  <div className={styles['productCart-product-content']}>
                    <p className={styles['productCart-title']}>{product.name} </p>
                    <p className={styles['productCart-desc']}>{product.description}</p>
                    <button className={styles['productCart-button']} onClick={() => deleteProduct(product.uid)}>
                      <img src={iconClose} alt="icon close" />
                      <div>Remove</div>
                    </button>
                  </div>
                </div>
              </td>
              <td>
                <div className={styles['productCart-action']}>
                  <button className={styles['productCart-button']} onClick={() => deleteItem(product.uid)}>
                    <img src={iconMinus} alt="icon minus" />
                  </button>
                  <div>{product.count}</div>
                  <button className={styles['productCart-button']} onClick={() => addItem(product)}>
                    <img src={iconAdd} alt="icon plus" />
                  </button>
                </div>
              </td>
              <td>${product.price}</td>
              <td>
                <strong>${(product.price * product.count).toFixed(2)}</strong>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    )
  } else {
    return (
      <div className={styles.productCartMobile}>
        <div className={styles['productCartMobile-title']}>Product</div>
        {items.map((product) => (
          <div className={styles['productCartMobile-content']} key={product.name}>
            <img
              src={`http://localhost:1337${product.image.data.attributes.url}`}
              alt={product.image.data.attributes.name}
            />

            <div>
              <p>
                <strong>{product.name}</strong>
              </p>
              <p className={styles['productCartMobile-desc']}>{product.description}</p>
              <div className={styles['productCart-action']}>
                <button className={styles['productCart-button']} onClick={() => deleteItem(product.uid)}>
                  <img src={iconMinus} alt="icon minus" />
                </button>
                <div>{product.count}</div>
                <button className={styles['productCart-button']} onClick={() => addItem(product)}>
                  <img src={iconAdd} alt="icon plus" />
                </button>
              </div>
            </div>
            <div>
              <div>
                <strong>${product.price}</strong>
              </div>
              <button className={styles['productCart-button']} onClick={() => deleteProduct(product.uid)}>
                <img src={iconClose} alt="icon close" />
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ProductCart
