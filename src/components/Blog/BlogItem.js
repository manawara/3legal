import React from 'react'
import { ButtonUnderLine } from '../Button/Button'
import styles from './BlogItem.module.scss'
const BlogItem = ({ title, image, alt }) => {
  const slug = title.replace(/\s/g, '-').toLowerCase()

  return (
    <div className={styles['blog-item']}>
      <img src={image} alt={alt ? alt : title} />
      <h6 className={styles['blog-item-title']}>{title}</h6>
      <ButtonUnderLine toPath={`articles/${slug}`}>read more</ButtonUnderLine>
    </div>
  )
}

export default BlogItem
