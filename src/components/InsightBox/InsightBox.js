import React from 'react'
import { ReactComponent as IconHeart } from '../../assets/heart.svg'
import { ReactComponent as Star } from '../../assets/StarFill.svg'
import Button from '../Button/Button'
import styles from './InsightBox.module.scss'
import { useCartContext } from '../../store/CartContext'
import useModal from '../../hooks/useModal'
import Modal from '../Modal/Modal'
import imageConfirm from '../../assets/confirm.svg'
const InsightBox = ({ data, isButton }) => {
  const ctx = useCartContext()
  const { open, toogleOpen } = useModal(1000)
  return (
    <div className={styles['insight-box']}>
      <div className={styles['insight-box-header']}>
        <div className={styles['insight-box-alert']}>
          <div className={styles['insight-box-discount']}>new</div>
          <div className={styles['insight-box-sale']}>{data.discount}%</div>
        </div>

        <div className={styles['insight-box-image']}>
          <IconHeart />
        </div>
      </div>
      <img src={`http://localhost:1337${data.image.data.attributes.url}`} alt={data.image.name} />

      <div className={styles['insight-box-button']}>
        {!isButton && (
          <Button
            onAction={() => {
              ctx.addItem(data)
              toogleOpen()
            }}
          >
            Add to cart
          </Button>
        )}
      </div>
      <div className={styles['insight-box-footer']}>
        <div className={'insight-box-star'}>
          {[...Array(data.stars)].map((_item, index) => {
            return <Star key={index} />
          })}
        </div>
        <p className={styles['insight-box-description']}>{data.name}</p>
        <div className={styles['insight-box-priceWrapper']}>
          <span className={styles['insight-box-price']}>${data.price}</span>
          <span className={styles['insight-box-priceOld']}>{data.priceOld && '$' + data.priceOld}</span>
        </div>
      </div>
      {open && (
        <Modal open={open}>
          <div className={styles['insight-box-modal']}>
            The product has been added <img src={imageConfirm} alt="icon confirm" />
          </div>
        </Modal>
      )}
    </div>
  )
}

export default InsightBox
