import React from 'react'
import cl from './Button.module.scss'

const Button = ({ onClick, text }) => (
  <button className={cl.button} onClick={onClick}>{text}</button>
)

export default Button
