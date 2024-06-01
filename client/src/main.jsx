import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Login from './pages/Login.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

const route=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
  },
  {
   path:"login",
  element:<Login/>
  },{
    path:"register",
    element:<RegisterPage/>
 }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
