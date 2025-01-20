import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Places from './components/places.jsx'
import Header from './components/header.jsx'

const router=createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/places',
    element: <Places />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
