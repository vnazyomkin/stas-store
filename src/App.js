/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Catalog from './pages/Catalog/Catalog'
import { loadDataStarted } from './store/data/action'

const App = ({ loadData }) => {
  useEffect(() => {
    loadData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="App">
      <Catalog />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(loadDataStarted()),
})

export default connect(null, mapDispatchToProps)(App)

