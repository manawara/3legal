import React from 'react'
import styles from './PromoCategory.module.scss'
import Box, { BoxColumns } from './Box'
import chairImage from '../../assets/chair.png'
import commodeImage from '../../assets/commode.png'
import tosterImage from '../../assets/toaster.png'
const PromoCategory = () => {
  return (
    <section className={styles.promo}>
      <div style={{ backgroundImage: `url(${chairImage}) ` }} className={styles['col-1']}>
        <Box title="Living room" />
      </div>

      <div style={{ backgroundImage: `url(${commodeImage}) ` }} className={styles['col-2']}>
        <BoxColumns title="Bedroom" />
      </div>
      <div style={{ backgroundImage: `url(${tosterImage}) ` }} className={styles['col-3']}>
        <BoxColumns title="Kitchen" />
      </div>
    </section>
  )
}

export default PromoCategory
