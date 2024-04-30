import React from 'react'
import styles from './ToolBar.module.scss'
const ToolBar = ({ image, onAction }) => {
  return (
    <button onClick={onAction} className={styles.toolbar}>
      <img src={image} alt="Toolbar" />
    </button>
  )
}

export default ToolBar
