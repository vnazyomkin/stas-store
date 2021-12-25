import React from 'react'
import Header from './Header/Header'
import cl from './Layout.module.scss'

const Layout = ({ children, categories, shownCategories, setShownCategories }) => {
  console.log()
  return (
    <>
      <Header className={cl.header} categories={categories} shownCategories={shownCategories} setShownCategories={setShownCategories}/>
      <main className={cl.container}>{children}</main>
      <footer>FOOTER</footer>
    </>
  )
}

export default Layout
