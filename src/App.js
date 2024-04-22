import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
