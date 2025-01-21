import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Places from './components/places.jsx'
import Mytrips from './components/mytrips.jsx'
import Booking from './components/booking.jsx'

const router=createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/places',
    element: <Places />
  },
  {
    path: '/My-Trips',
    element: <Mytrips />
  },
  {
    path: '/booking/:id/:destination/:travelType/:price',
    element: <Booking />
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
    
  // </StrictMode>,

  <RouterProvider router={router} />
)
