import React from 'react'
import Header from '../companent/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../companent/Footer/Footer'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout