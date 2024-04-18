import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.scss'

const Nav = () => {
  return (
    <nav>
      <ul className={styles.navlist}>
        <li>
          <NavLink to=".." className={({ isActive }) => (isActive ? styles.active : '')}>
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop">shop</NavLink>
        </li>
        <li>
          <NavLink to="product">product</NavLink>
        </li>
        <li>
          <NavLink to="contact-us">contact us</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
