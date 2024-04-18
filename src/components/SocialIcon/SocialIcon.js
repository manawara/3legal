import React from 'react'
import { ReactComponent as Facebook } from '../../assets/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/instagram.svg'
import { ReactComponent as Youtube } from '../../assets/youtube.svg'
import { Link } from 'react-router-dom'
import styles from './SocialIcon.module.scss'

const SocialIcon = () => {
  return (
    <div className={styles.social}>
      <ul className={styles['social-list']}>
        <li>
          <Link>
            <Instagram />
          </Link>
        </li>
        <li>
          <Link>
            <Facebook />
          </Link>
        </li>

        <li>
          <Link>
            <Youtube />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SocialIcon
