import React from 'react'
import styles from './BreadCrumbs.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { setLinksToBreadCrumb } from '../../utils/utils'
import arrowRight from '../../assets/chevron-right.svg'
const BreadCrumbs = () => {
  const location = useLocation()
  const getLinks = location.pathname.split('/').filter((el) => el !== '')
  const breadCrumb = setLinksToBreadCrumb(getLinks)
  return (
    <div className={styles.breadCrumb}>
      {breadCrumb.map((pathElement, index) => (
        <span key={Math.random().toString(16).slice(2)}>
          <Link to={pathElement.path}>{pathElement.name}</Link>
          {index !== breadCrumb.length - 1 && (
            <img src={arrowRight} alt="Arrow right" className={styles['breadCrumb-arrow']} />
          )}
        </span>
      ))}
    </div>
  )
}

export default BreadCrumbs
