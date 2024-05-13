import React from 'react'
import { useCartContext } from '../../store/CartContext'
import Modal from '../Modal/Modal'
import useModal from '../../hooks/useModal'
import { ReactComponent as Search } from '../../assets/search.svg'
import { ReactComponent as Profile } from '../../assets/profile.svg'
import { ReactComponent as Shop } from '../../assets/shopping.svg'
import { ReactComponent as Logout } from '../../assets/logout.svg'
import styles from './Icon-profile.module.scss'
import { useRouteLoaderData, Link, useSubmit } from 'react-router-dom'

const IconProfile = () => {
  const ctx = useCartContext()
  const token = useRouteLoaderData('root')
  const submit = useSubmit()
  const { open, toogleOpen } = useModal(1000)

  return (
    <>
      <ul className={styles.profile}>
        <li>
          <Search />
        </li>
        {!token && (
          <li>
            <Link to="/auth?mode=login">
              <Profile />
            </Link>
          </li>
        )}
        <li>
          <Link to="/shopping-cart">
            <div className={styles['profile-icons']}>
              <Shop />
              <span>{ctx.items.length}</span>
            </div>
          </Link>
        </li>
        {token && (
          <li
            onClick={() => {
              submit(null, {
                method: 'post',
                action: '/logout',
              })
              toogleOpen()
            }}
          >
            <Logout />
          </li>
        )}
      </ul>
      {open && (
        <Modal open={open}>
          <div className={styles['insight-box-modal']}>You have been logout!</div>
        </Modal>
      )}
    </>
  )
}

export default IconProfile
