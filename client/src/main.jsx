import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/home/authentication/Login.jsx'
import Signup from './pages/home/authentication/Signup.jsx'
import Home from './pages/home/Home.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },
])


createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router}/>
    <App />
  </>
)
