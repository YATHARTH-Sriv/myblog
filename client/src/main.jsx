import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Login from './pages/Login.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import Profile from './pages/Profile.jsx'
import Home from './pages/Home.jsx'
import Create from './pages/create.jsx'
import Edit from './pages/edit.jsx'
import Logout from './pages/Logout.jsx'
import Singlepost from './pages/Singlepost.jsx'
import  {Userprovider} from './Usercontext.jsx'
import Myposts from './pages/Myposts.jsx'


const route=createBrowserRouter([
  {
    path:"/",
    element:  <Userprovider><Layout/></Userprovider>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"login",
       element:<Login/>
       },
       {
         path:"register",
         element:<RegisterPage/>
       },
       {
        path:"posts/:id",
        element:<Singlepost/>
       },
       {
        path:"profile/:id",
        element: <Profile/>
       },
       {
        path:"create",
        element:<Create/>
       },
       {
        path:"posts/:id/edit",
        element:<Edit/>
       },
       {
        path:"logout",
        element:<Logout/>
       },
       {
        path:"myposts/:id",
        element:<Myposts/>
       }
    ]
  },
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider  router={route}/>
  </React.StrictMode>,
)
