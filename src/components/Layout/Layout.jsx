import React from 'react'
import Header from './components/Header'
import cl from './styles/Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header className={cl.header}/>
      <main className={cl.main}>
        <div className={cl.container}>
          {children}
        </div>
      </main>
      <footer className={cl.footer}>FOOTER</footer>
    </>
  )
}

export default Layout
