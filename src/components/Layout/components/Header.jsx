import React, { useState } from 'react'
import cl from '../styles/Header.module.scss'
import DropList from './DropList'
// import MenuBar from './MenuBar/MenuBar'

const Header = ({ className }) => {
  const [isDropListOpened, setDropListOpened] = useState(false)

  return (
    <header className={className}>
      <div className={cl.headerContainer}>
        <div className={cl.chapterBlock}>
          <div className={cl.chapter}>О нас</div>
          <div className={cl.chapter} onClick={() => setDropListOpened(prevState => !prevState)}>Товары</div>
        </div>
        <div className={cl.storeName}>СТАСЯМБА-СТОР</div>
        <div className={cl.chapterBlock}>
          <div className={cl.chapter}>Доставка</div>
          <div className={cl.chapter}>Контакты</div>
        </div>
      </div>
      <DropList isDropListOpened={isDropListOpened} />
    </header>
  )
}

export default Header
