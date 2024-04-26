import React from 'react'
import { ButtonUnderLine } from '../Button/Button'
import BlogItem from '../Blog/BlogItem'
import styles from './Blog.module.scss'

const Blog = ({ title, data: articles }) => {
  return (
    <section className={styles.blog}>
      <div className={styles['blog-header']}>
        <h5 className={styles['blog-title']}>{title}</h5>
        <ButtonUnderLine toPath="/blog">more actions</ButtonUnderLine>
      </div>

      <div className={styles['blog-content']}>
        {articles.data &&
          articles.data.map(({ attributes: item }) => (
            <BlogItem
              key={item.articleID}
              title={item.name}
              image={`http://localhost:1337${item.image.data.attributes.url}`}
              alt={item.image.data.attributes.alternativeText}
            />
          ))}
      </div>
    </section>
  )
}

export default Blog
