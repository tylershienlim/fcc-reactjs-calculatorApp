import React from 'react'
import './Button.css'

const Button = ({children, color="Number", onClick}) => {
  return (
    <button className={`button${color}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button