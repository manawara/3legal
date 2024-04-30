import React from 'react'
import InsightBox from '../InsightBox/InsightBox'
import styles from './FilterProduct.module.scss'
const FilterProduct = ({ grid, data }) => {
  return (
    <div className={styles['filter-product']}>
      <div className={styles['filter-product-wrapper']} style={{ gridTemplateColumns: `repeat(${grid},1fr` }}>
        {data && data.map((el) => <InsightBox data={el.attributes} key={el.id} />)}
      </div>
    </div>
  )
}

export default FilterProduct
