import React from 'react'
import styles from './Input.module.scss'
const Input = ({ label, type, name, placeholder, onAdd, props }) => {
  return (
    <div className={styles.input}>
      {label && <label htmlFor={name}>{label}</label>}
      <input placeholder={placeholder} id={name} type={type} onClick={onAdd} {...props} />
    </div>
  )
}

export default Input
