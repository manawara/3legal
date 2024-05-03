import React from 'react'
import styles from './Input.module.scss'
const Input = ({ label, type, name, placeholder, onAdd, autoComplete, ...props }) => {
  return (
    <div className={styles.input}>
      {label && <label htmlFor={name}>{label}</label>}
      <input placeholder={placeholder} id={name} type={type} onClick={onAdd} {...props} autoComplete={autoComplete} />
    </div>
  )
}

export const InputUnderBottom = ({ label, type, name, placeholder, onAdd, props, autoComplete, required }) => {
  return (
    <div className={styles['input-under-bottom']}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        placeholder={placeholder}
        id={name}
        type={type}
        onClick={onAdd}
        required={required}
        name={name}
        {...props}
        autoComplete={autoComplete}
      />
    </div>
  )
}

export const Checkbox = ({ label, name, placeholder, onAdd, props, children }) => {
  return (
    <div className={styles['checkbox']}>
      {label && <label htmlFor={name}>{label}</label>}
      <input placeholder={placeholder} id={name} type="checkbox" onClick={onAdd} {...props} />
      {children}
    </div>
  )
}

export default Input
