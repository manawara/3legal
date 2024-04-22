import React from 'react'
import { ButtonUnderLine } from '../Button/Button'
import styles from './BlogItem.module.scss'
const BlogItem = ({ title, image, alt }) => {
  return (
    <div className={styles['blog-item']}>
      <img src={image} alt={alt} />
      <h6 className={styles['blog-item-title']}>{title}</h6>
      <ButtonUnderLine>read more</ButtonUnderLine>
    </div>
  )
}

export default BlogItem
