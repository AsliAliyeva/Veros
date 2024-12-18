import React from 'react'
import Veramar from './companent/Main/Veramar'
import Blog from './companent/Main/Blog'
import Contact from './companent/Main/Contact'
import Tienda from './companent/Main/Tienda'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layouts/Layout'
import Registartion from './companent/Main/Registartion'
import Article from './companent/Main/Article'

function App() {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Layout />} >
          <Route index element={<Veramar />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/tienda' element={<Tienda />} />
          <Route path='/registr' element={<Registartion />} />
          <Route path='/article' element={<Article />} />
        </Route>
      </Routes>
    </>
  )
}

export default App