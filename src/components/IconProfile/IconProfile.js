import React from 'react'
import { ReactComponent as Search } from '../../assets/search.svg'
import { ReactComponent as Profile } from '../../assets/profile.svg'
import { ReactComponent as Shop } from '../../assets/shopping.svg'
import styles from './Icon-profile.module.scss'

const IconProfile = () => {
  return (
    <ul className={styles.profile}>
      <li>
        <Search />
      </li>
      <li>
        <Profile />
      </li>
      <li>
        <div className={styles['profile-icons']}>
          <Shop />
          <span>2</span>
        </div>
      </li>
    </ul>
  )
}

export default IconProfile
