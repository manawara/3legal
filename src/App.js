import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { CartContexProvider } from './store/CartContext'

const App = () => {
  return (
    <CartContexProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CartContexProvider>
  )
}

export default App
