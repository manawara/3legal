import React from 'react'
import { Link, NavLink, useSubmit } from 'react-router-dom'
import styles from './NavMobile.module.scss'
import Hamburger from 'hamburger-react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { ReactComponent as Shop } from '../../assets/shopping.svg'
import { ReactComponent as Heart } from '../../assets/heart.svg'
import SocialIcon from '../SocialIcon/SocialIcon'
import { useCartContext } from '../../store/CartContext'
const NavMobile = ({ isOpen, onOpen }) => {
  let submit = useSubmit()
  const ctx = useCartContext()
  const user = localStorage.getItem('user')
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
          <Link to="/shopping-cart">
            <div>
              <Shop />
              <span>{ctx.items.length}</span>
            </div>
          </Link>
        </div>
        <div className={styles['nav-mobile-item--footer']}>
          <span>Wishlist</span>
          <div>
            <Heart />
            <span>2</span>
          </div>
        </div>
        {user ? (
          <Button
            onAction={() =>
              submit(null, {
                method: 'post',
                action: '/logout',
              })
            }
          >
            Logout
          </Button>
        ) : (
          <Link to="auth?mode=login">
            <Button>Sign in</Button>
          </Link>
        )}

        <SocialIcon />
      </div>
    </nav>
  )
}

export default NavMobile
