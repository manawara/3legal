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

export const Checkbox = ({ label, name, placeholder, onAdd, required, props, children }) => {
  return (
    <div className={styles['checkbox']}>
      {label && <label htmlFor={name}>{label}</label>}
      <input placeholder={placeholder} id={name} type="checkbox" onClick={onAdd} required={required} {...props} />
      {children}
    </div>
  )
}

export const InputRadio = ({ label, name, value, onAction, required, checked, defaultValue, price, props }) => {
  return (
    <div className={styles.radio}>
      {label && (
        <label>
          {label}
          <input
            name={name}
            type="radio"
            onChange={onAction}
            defaultChecked={checked}
            defaultValue={defaultValue}
            required={required}
            {...props}
            value={value}
          />
          <span></span>
          <span>{price}</span>
        </label>
      )}
    </div>
  )
}

export default Input
