import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import config from './constants/config.jsx';
import './index.css'
import App from './App.jsx'
import Header from './constants/header.jsx'
import Footer from './constants/footer.jsx'
import Places from './components/places.jsx'
import Mytrips from './components/mytrips.jsx'
import ContactUs from './components/contact-us.jsx'
import TravelPlan from './components/travelPlan.jsx'
import { FormDataProvider } from './components/FormDataContext.jsx'

const router=createBrowserRouter([
  {
    path: '/not-found',
    element: <App />
  },
  {
    path: '/',
    element: <Places />
  },
  {
    path: '/My-Trips',
    element: <Mytrips />
  },
  {
    path: '/Contact-Us',
    element: <ContactUs />
  },
  {
    path: '/travel-plan/:tripId',
    element: <TravelPlan />
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
    
  // </StrictMode>,

  <FormDataProvider>
    <GoogleOAuthProvider clientId={config.google_Auth_Client_Id}>
      <Header />
        <RouterProvider router={router} />
      <Footer />
    </GoogleOAuthProvider>
  </FormDataProvider>
)
