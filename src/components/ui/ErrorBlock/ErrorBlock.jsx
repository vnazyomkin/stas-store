import React from 'react'
import cl from './ErrorBlock.module.scss'

const ErrorBlock = ({ errorText }) => (
  <div className={cl.errorBlock}>{errorText}</div>
)

export default ErrorBlock
