import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-wrapper']}>
        <div className={styles['footer-row']}>
          <div className={styles['footer-row-content']}>
            <span className={styles['footer-logo']}>3legant</span>
            <p className={styles['footer-desc']}>Gift & Decoration Store</p>
          </div>
          <nav className={styles['footer-nav']}>
            <Link to="/">Home</Link>
            <Link to="/">Shop</Link>
            <Link to="/">Product</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Contact us</Link>
          </nav>
        </div>
        <div className={styles['footer-row']}>
          <div className={styles['footer-policy']}>
            <Link>privacy policy</Link>
            <Link>terms of use</Link>
          </div>
          <p className={styles['footer-copyright']}>Copyright © 2023 3legant. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
