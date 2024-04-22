import React from 'react'
import styles from './AboutItem.module.scss'
const AboutItem = ({ image, alt, title, descriptionFirst, descriptionSecond }) => {
  return (
    <div className={styles['about-item']}>
      <img src={image} alt={alt} />
      <h5 className={styles['about-item-title']}>{title}</h5>
      <div className={styles['about-item-description']}>{descriptionFirst}</div>
      <div className={styles['about-item-description']}>{descriptionSecond}</div>
    </div>
  )
}

export default AboutItem
