import React, { useRef, useEffect, useState } from 'react'
import InsightBox from '../InsightBox/InsightBox'
import styles from './InsightBoxCarousel.module.scss'
import { ButtonUnderLine } from '../Button/Button'

const InsightBoxCarousel = ({ title, linkTo, products }) => {
  return (
    <div className={styles['insightBoxCarousel-wrapper']}>
      <div className={styles['insightBoxCarousel-header']}>
        <h5>{title}</h5>
        <ButtonUnderLine to={linkTo}>more products</ButtonUnderLine>
      </div>

      <div className={styles.insightBoxCarousel}>
        {products.map(({ attributes: product }) => {
          return <InsightBox data={product} key={product.uid} />
        })}
      </div>
    </div>
  )
}

export default InsightBoxCarousel
