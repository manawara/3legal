import React from 'react'
import styles from './Process.module.scss'
import { useCartContext } from '../../store/CartContext'

const Process = ({ count, title }) => {
  const { active } = useCartContext()

  let classes =
    active === count
      ? `${styles['process-active']}`
      : active > count
      ? styles['process-done']
      : styles['process-circle']
  return (
    <div className={styles.process}>
      <div className={classes}>{count}</div>
      <div>{title}</div>
    </div>
  )
}

export default Process
