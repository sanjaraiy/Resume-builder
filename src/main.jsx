import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './auth/signIn/index.jsx'
import Home from './home/Home.jsx'
import Dashboard from './dashboard/Dashboard.jsx'

const router = createBrowserRouter([
  {
   
    element:<App></App>,
    children:[
      {
        path:  '/',
        element: <Home></Home>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
  {
    path:'/auth/sign-in',
    element: <SignIn></SignIn>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
