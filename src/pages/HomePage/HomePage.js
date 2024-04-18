import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import styles from './HomePage.module.scss'
import PromoCategory from '../../components/PromoCategory/PromoCategory'
import InsightBoxCarousel from '../../components/InsightBoxCarousel/InsightBoxCarousel'
const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Carousel
        options={{
          dots: true,
          arrows: true,
          autoplay: {
            time: 5000, //move slide after x seconds
          },
        }}
      />
      <div className={styles.info}>
        <h2>Simply Unique/ Simply Better.</h2>
        <p>
          <strong>3legant</strong> is a gift & decorations store based in HCMC, Vietnam. Est since 2019.{' '}
        </p>
      </div>
      <PromoCategory />
      <InsightBoxCarousel title="New Arrivals" />
    </div>
  )
}

export default HomePage
