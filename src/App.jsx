import React from 'react'
import  { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import SignIn from './Components/SignIn/SignIn'
import Home from './Components/Home'
import Blog from './Components/Blog'
import Login from './Components/Login/Login'
import Otp from './Components/Otp/Otp'
import ForgotLoginId from './Components/ForgotPassword/ForgotLoginId'
import ForgotOtp from './Components/ForgotPassword/ForgotOtp'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'

export default function App() {
  return (
    <BrowserRouter>
        <Navbar />
    <Routes >
        <Route path='/signin'  element={<SignIn />} />
        <Route path='/login'  element={<Login/>} />
        <Route path='/otp/:email'  element={<Otp />} />
        <Route path='/forgototp' element={<ForgotOtp />} /> 
        <Route path='/forgotloginid'  element={<ForgotLoginId />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
    </Routes>
    </BrowserRouter>
  )
}
