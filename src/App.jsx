import React, { useEffect } from 'react'
import Veramar from './companent/Main/Veramar'
import Blog from './companent/Main/Blog'
import Contact from './companent/Main/Contact'
import Tienda from './companent/Main/Tienda'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './Layouts/Layout'
import Registartion from './companent/Main/Registartion'
import Article from './companent/Main/Article'
import Details from './companent/Main/Details'

function App() {
  const { pathname} = useLocation()

  useEffect(()=> {
    window.scrollTo({
      behavior: "smooth",
      top:0
    })
  }, [pathname])
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Veramar />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/tienda' element={<Tienda />} />
          <Route path='/registr' element={<Registartion />} />
          <Route path='/article' element={<Article />} />
          <Route path='/details/:index/:id' element={< Details />} />
        </Route>
      </Routes>
    </>
  )
}

export default App