import React, {FC} from 'react'
import styles from './style.module.scss'

interface InputProps {
  type?: string
  className?: string
  placeholder?: string
  required?: boolean
  value?: string | number | readonly string[]
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onBlur?:  React.FocusEventHandler<HTMLInputElement> 
  mode?: 'rounded' | 'flat' | 'contained'
  name?: string
  isValid?: boolean
  errorMsg?: string
}

export const Input: FC<InputProps> = ({type = 'text', required=false, placeholder, className, value, onChange, onBlur, mode, name, isValid, errorMsg}) => {
    return (
      <>
        <input name={name} value={value} required={required} type={type} className={[styles.input, mode === 'rounded' && styles.rounded, className].join(' ')} placeholder={placeholder} onChange={onChange} onBlur={onBlur} />
        {!isValid && <p>{errorMsg}</p>}
      </>
  )
}

