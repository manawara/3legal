import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg'
import styles from './Button.module.scss'

const Button = ({ type, children }) => {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  )
}

export const ButtonUnderLine = ({ children, toPath }) => {
  return (
    <Link to={`/${toPath}`} className={styles['button-underline']}>
      {children}
      <ArrowRight />
    </Link>
  )
}

export default Button
