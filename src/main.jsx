import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home/Home.jsx'
import Dashboard from './dashboard/Dashboard.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import SignInPage from './auth/signIn/SignInPage.jsx'

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const router = createBrowserRouter([
  {
   
    element:<App></App>,
    children:[
      
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
  {
    path:  '/',
    element: <Home></Home>
  },
  {
    path:'/auth/sign-in',
    element: <SignInPage></SignInPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
         <RouterProvider router={router}></RouterProvider>
     </ClerkProvider>
  </React.StrictMode>,
)
