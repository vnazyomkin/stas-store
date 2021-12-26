import React from 'react'
import cl from './Header.module.scss'
import MenuBar from './MenuBar/MenuBar'

const Header = ({ className }) => {
  return (
    <header className={className}>
      <div className={cl.lkBar}>СТАСЯМБА-СТОР</div>
      <MenuBar/>
    </header>
  )
}

export default Header
