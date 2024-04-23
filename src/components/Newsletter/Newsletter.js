import React from 'react'
import styles from './Newsletter.module.scss'
import iconEmail from '../../assets/email.svg'
const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <h6 className={styles['newsletter-title']}>Join Our Newsletter</h6>
      <p className={styles['newsletter-description']}>Sign up for deals, new products and promotions</p>
      <form>
        <div className={styles['newsletter-content']}>
          <input type="email" className={styles['newsletter-input']} placeholder="Email address" />
          <button>signup</button>
        </div>
      </form>
    </section>
  )
}

export default Newsletter
