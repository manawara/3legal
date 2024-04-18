import React, { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import Nav from '../Nav/Nav'
import styles from './Header.module.scss'

import IconProfile from '../IconProfile/IconProfile'
import NavMobile from '../Nav/NavMobile'

const Header = () => {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen((prev) => !prev)
  }
  return (
    <header className={styles.header}>
      <div className={styles['header-left']}>
        <div className={styles['header-hamburger']}>
          <Hamburger size={20} toggled={open} onToggle={handleClickOpen} duration={1.2} />
        </div>

        <span className={styles.logo}>3legant.</span>
      </div>

      <Nav />
      <NavMobile isOpen={open} onOpen={handleClickOpen} />
      <IconProfile />
    </header>
  )
}

export default Header
