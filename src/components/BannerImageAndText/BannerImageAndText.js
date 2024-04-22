import React from 'react'
import { ButtonUnderLine } from '../Button/Button'
import styles from '../BannerImageAndText/BannerImageAndText.module.scss'

const BannerImageAndText = ({ image, alt, title, tag, description }) => {
  return (
    <div className={styles['banner-image-text']}>
      <img src={image} alt={alt} />

      <div className={styles['banner-image-text-content']}>
        <p className={styles['banner-image-text-tag']}>{tag}</p>
        <h4 className={styles['banner-image-text-title']}>{title}</h4>
        <p className={styles['banner-image-text-description']}> {description}</p>
        <ButtonUnderLine toPath="/shop">shop now</ButtonUnderLine>
      </div>
    </div>
  )
}

export default BannerImageAndText
