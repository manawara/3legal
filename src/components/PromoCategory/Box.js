import React from 'react'
import styles from './Box.module.scss'

import { ButtonUnderLine } from '../Button/Button'
const Box = ({ title, img }) => {
  return (
    <div className={styles.box}>
      <div>
        <h3>{title}</h3>
        <ButtonUnderLine>shop now</ButtonUnderLine>
      </div>
    </div>
  )
}

export const BoxColumns = ({ title, img }) => {
  return (
    <div className={styles['box']}>
      <h3>{title}</h3>
      <ButtonUnderLine>shop now</ButtonUnderLine>
    </div>
  )
}

export default Box
