import React from 'react'
import  { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import SignIn from './Components/SignIn/SignIn'

export default function App() {
  return (
    <BrowserRouter>
        <Navbar />
    <Routes >
        <Route path='/signin'  element={<SignIn />} />
    </Routes>
    </BrowserRouter>
  )
}
