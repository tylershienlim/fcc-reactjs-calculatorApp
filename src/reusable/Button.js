import React from 'react'
import './Button.css'

const Button = ({children, color="Number"}) => {
  return (
    <button className={`button${color}`}>
        {children}
    </button>
  )
}

export default Button