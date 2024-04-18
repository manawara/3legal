import React from 'react'
import styles from './Dots.module.scss'

const Dots = ({ data, active, onDot }) => {
  return (
    <ul className={styles.dots}>
      {data.map((el, index) => (
        <li key={index}>
          <span
            onClick={() => onDot(index)}
            style={{ backgroundColor: `${index === active ? 'var(--gray-color-1)' : ''}` }}
          ></span>
        </li>
      ))}
    </ul>
  )
}

export default Dots
