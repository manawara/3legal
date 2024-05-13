import React from 'react'
import styles from './Select.module.scss'
const Select = ({ label, data, id, defualtOption, fnChange, name, defualtValue }) => {
  return (
    <div className={styles.select}>
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={fnChange} defaultValue={defualtOption} name={name}>
        <option value={defualtValue}>{defualtOption}</option>
        {data.map((el) => {
          return el.value || el.attributes?.name ? (
            <option key={!el.uid ? el.attributes.uid : el.uid} value={!el.value ? el.attributes.name : el.value}>
              {!el.name ? el.attributes.name : el.name}
            </option>
          ) : (
            <option value={el.name}>{el.name}</option>
          )
        })}
      </select>
    </div>
  )
}

export default Select
