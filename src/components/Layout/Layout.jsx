import React from 'react'
import Header from './Header/Header'
import cl from './Layout.module.scss'

const Layout = ({ children }) => {
  console.log()
  return (
    <>
      <Header className={cl.header}/>
      <main className={cl.container}>{children}</main>
      <footer>FOOTER</footer>
    </>
  )
}

export default Layout
