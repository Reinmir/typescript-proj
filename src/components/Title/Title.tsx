import React from 'react'
import styles from './style.module.scss'


export const Title: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <h1 className={styles.title}>{children}</h1>
  )
}
