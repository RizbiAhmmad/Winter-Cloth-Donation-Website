import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router ={router}></RouterProvider>
    </AuthProvider>
    <ToastContainer position="top-center" autoClose={3000}></ToastContainer>
  </StrictMode>,
)
