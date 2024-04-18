import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavMobile.module.scss'
import Hamburger from 'hamburger-react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { ReactComponent as Shop } from '../../assets/shopping.svg'
import { ReactComponent as Heart } from '../../assets/heart.svg'
import SocialIcon from '../SocialIcon/SocialIcon'
const NavMobile = ({ isOpen, onOpen }) => {
  let classes = isOpen
    ? { transform: 'translateX(0%)', transition: 'all 0.3s ease-out' }
    : { transform: 'translateX(-100%)', transition: 'all 0.3s 0.3s ease-out' }
  return (
    <nav className={styles['nav-mobile']} style={classes}>
      <div className={styles['nav-mobile-wrapper']}>
        <div>3legant.</div>
        <div>
          <Hamburger toggled={isOpen} onToggle={onOpen} />
        </div>
      </div>
      <form>
        <Input type="text" name="search" placeholder="Search" />
      </form>
      <ul>
        <li className={styles['nav-mobile-item']}>
          <NavLink
            to=".."
            className={({ isActive }) =>
              isActive ? `${styles.active} ' ' ${styles['nav-mobile-item']}` : styles['nav-mobile-item']
            }
          >
            home
          </NavLink>
        </li>
        <li className={styles['nav-mobile-item']}>
          <NavLink to="/shop">shop</NavLink>
        </li>
        <li className={styles['nav-mobile-item']}>
          <NavLink to="product">product</NavLink>
        </li>
        <li className={styles['nav-mobile-item']}>
          <NavLink to="contact-us">contact us</NavLink>
        </li>
      </ul>
      <div className={styles['nav-mobile-footer']}>
        <div className={styles['nav-mobile-item--footer']}>
          <span>Cart</span>
          <div>
            <Shop />
            <span>2</span>
          </div>
        </div>
        <div className={styles['nav-mobile-item--footer']}>
          <span>Wishlist</span>
          <div>
            <Heart />
            <span>2</span>
          </div>
        </div>
        <Button>Sign in</Button>
        <SocialIcon />
      </div>
    </nav>
  )
}

export default NavMobile
