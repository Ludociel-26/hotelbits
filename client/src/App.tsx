import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login'
import Home from './pages/Home'
import Habitaciones from './pages/Habitaciones'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import NotFound from './pages/NotFound'
import Ubicacion from './pages/Ubicacion';
import Servicios from './pages/Servicios';
import { Dashboard } from './pages/dashboard/dashboard';


function App() {
  return (
    <div> 
      <ToastContainer/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/habitaciones' element={<Habitaciones/>}/>
      <Route path='/servicios' element={<Servicios/>}/>
      <Route path='/ubicacion' element={<Ubicacion/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/email-verify' element={<EmailVerify/>}/>
      <Route path='/reset-password' element={<ResetPassword/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
