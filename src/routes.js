import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contato from './Pages/Contato'
import HomePage from './Pages/HomePage'

const MainRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/contato" element={<Contato/>}  />
    </Routes>
  )
}

export default MainRouter