import React from 'react'
import { ButtonUnderLine } from '../Button/Button'
import BlogItem from '../Blog/BlogItem'
import styles from './Blog.module.scss'
import imageBlog from '../../assets/living_room_3.jpeg'

const Blog = ({ title }) => {
  return (
    <section className={styles.blog}>
      <div className={styles['blog-header']}>
        <h5 className={styles['blog-title']}>{title}</h5>
        <ButtonUnderLine toPath="/blog">more actions</ButtonUnderLine>
      </div>

      <div className={styles['blog-content']}>
        <BlogItem title="7 ways to decor your home" image={imageBlog} />
        <BlogItem title="7 ways to decor your home" image={imageBlog} />
        <BlogItem title="7 ways to decor your home" image={imageBlog} />
      </div>
    </section>
  )
}

export default Blog
