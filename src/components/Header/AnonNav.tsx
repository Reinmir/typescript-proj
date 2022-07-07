import React from 'react'
import styles from './style.module.scss'

import { NavLink } from 'react-router-dom'

import { PageRoutes } from 'constants/routeNames'


export const AnonNav = () => {
  return (
    <nav className={styles.nav}>
    <NavLink className={styles.navLink} to={PageRoutes.Home}>Home</NavLink>
    <NavLink className={styles.navLink} to={PageRoutes.Register}>Registration</NavLink>
    <NavLink className={styles.navLink} to={PageRoutes.Login}>Sign in</NavLink>
  </nav>
  )
}
