import React from 'react'
import cl from './Header.module.scss'
import MenuBar from './MenuBar/MenuBar'

const Header = ({ categories, className, shownCategories, setShownCategories }) => {
  return (
    <header className={className}>
      <div className={cl.lkBar}>СТАСЯМБА-СТОР</div>
      <MenuBar categories={categories} shownCategories={shownCategories} setShownCategories={setShownCategories}/>
    </header>
  )
}

export default Header
