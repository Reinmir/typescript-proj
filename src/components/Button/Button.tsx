import React from 'react'
import styles from './style.module.scss'
interface ButtonProps extends React.PropsWithChildren {
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const Button: React.FC<ButtonProps> = ({className, onClick, children}) => {
  return (  
    <button className={[styles.submBtn,className].join(' ')} onClick={onClick} type='submit'>{children}</button>
  )
}
