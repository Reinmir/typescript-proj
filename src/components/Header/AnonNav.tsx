import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss'
export const AnonNav = () => {
  return (
    <nav className={styles.nav}>
    <NavLink className={styles.navLink} to={"/"}>Home</NavLink>
    <NavLink className={styles.navLink} to={'/register'}>Registration</NavLink>
    <NavLink className={styles.navLink} to={"/login"}>Sign in</NavLink>
  </nav>
  )
}
