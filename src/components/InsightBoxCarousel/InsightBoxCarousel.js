import React, { useRef, useEffect, useState } from 'react'
import InsightBox from '../InsightBox/InsightBox'
import styles from './InsightBoxCarousel.module.scss'
import { ButtonUnderLine } from '../Button/Button'
const data = [
  {
    name: 'test1',
    discount: -50,
    stars: 5,
    price: 199,
    priceOld: 400,
  },
  {
    name: 'test2',
    discount: -50,
    stars: 4,
    price: 300,
  },
  {
    name: 'test3',
    discount: -50,
    stars: 4,
    price: 100,
    oldPrice: 400,
  },
  {
    name: 'test4',
    discount: -50,
    stars: 5,
    price: 199,
    priceOld: 400,
  },
  {
    name: 'test5',
    discount: -50,
    stars: 5,
    price: 199,
    priceOld: 400,
  },
  {
    name: 'test6',
    discount: -50,
    stars: 5,
    price: 400,
    priceOld: 600,
  },
]
const InsightBoxCarousel = ({ title, linkTo }) => {
  return (
    <>
      <div className={styles['insightBoxCarousel-header']}>
        <h5>{title}</h5>
        <ButtonUnderLine to={linkTo}>more products</ButtonUnderLine>
      </div>

      <div className={styles.insightBoxCarousel}>
        {data.map((item) => {
          return <InsightBox data={item} />
        })}
      </div>
    </>
  )
}

export default InsightBoxCarousel
