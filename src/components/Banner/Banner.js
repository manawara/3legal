import React from 'react'
import styles from './Banner.module.scss'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'

const Banner = ({ image, title, description }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={styles.banner}>
      <BreadCrumbs />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Banner
