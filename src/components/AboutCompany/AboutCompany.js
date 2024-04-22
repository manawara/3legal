import React from 'react'
import styles from './AboutCompany.module.scss'
import AboutItem from './AboutItem'
import iconDeliver from '../../assets/fastDelivery.svg'
import iconMoney from '../../assets/money.svg'
import iconLock from '../../assets/lock.svg'
import iconCall from '../../assets/call.svg'
const AboutCompany = () => {
  return (
    <section className={styles['about-company']}>
      <AboutItem title="Free Shipping" descriptionFirst="Order" descriptionSecond="above $200" image={iconDeliver} />
      <AboutItem title="Money-back" descriptionFirst="30 days" descriptionSecond="guarantee" image={iconMoney} />
      <AboutItem title="Secure Payments" descriptionFirst="Secured" descriptionSecond="by Stripe" image={iconLock} />
      <AboutItem title="24/7 Support" descriptionFirst="Phone and" descriptionSecond="Email support" image={iconCall} />
    </section>
  )
}

export default AboutCompany
