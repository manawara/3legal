import React, { useState } from 'react'
import Process from './Process'
import styles from './NavBar.module.scss'

const NavBar = ({ title }) => {
  return (
    <div className={styles.navbar}>
      <div>
        <h2>{title}</h2>
        <ul>
          <li>
            <Process count={1} title="Shopping cart" />
          </li>
          <li>
            <Process count={2} title="Checkout details" />
          </li>
          <li>
            <Process count={3} title="Order complete" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
