import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contato from './Pages/Contato'
import HomePage from './Pages/HomePage'
import Sobre from './Pages/Sobre'

const MainRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/contato" element={<Contato/>}  />
        <Route path="/sobre" element={<Sobre/>}  />
    </Routes>
  )
}

export default MainRouter