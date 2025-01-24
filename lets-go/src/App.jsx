// import { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className='container text-center'>
//         <div className='home-title mt-5'>
//           <h1 className='heading-title'>Discover Your Next Adventure with AI:</h1>
//           <h2 className='heading-subtitle'>Plan Your Trip at Your Fingertips</h2>
//         </div>
//         <div className='home-description mt-5'>
//           <p>
//             Let's Go is a travel app that uses AI to help you plan your next
//             adventure. Whether you're looking for a weekend getaway or a
//             month-long vacation, Let's Go can help you find the perfect
//             destination, book your flights, and reserve your hotel room.
//           </p>
//         </div>
        
//         <div className='home-cta mt-5'>
//           <Button className='btn bg-black'>Get Started</Button>
//         </div>
      
//       </div>
//     </>
//   )
// }

// export default App


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import icon1 from './assets/images/ai-suggest.png';
import icon2 from './assets/images/booking.png';
import icon3 from './assets/images/notebook.png';
import './App.css';

import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function App() {

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      GetUserProfile(tokenResponse)
    },
    onError:(error)=>console.log(error)
  });

  const GetUserProfile=(tokenResponse)=>{
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenResponse?.access_token}`, {
      headers:{
        Authorization: `Bearer ${tokenResponse?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((response)=>{
      localStorage.setItem('user',JSON.stringify(response.data));
      window.location.reload();
    })
  }

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section text-center">
        <h1 className="heading-title">Discover Your Next Adventure with AI</h1>
        <h2 className="heading-subtitle">Plan Your Trip at Your Fingertips</h2>
        <Button className="btn mt-4 bg-black" onClick={login}>Get Started</Button>
      </div>

      {/* Features Section */}
      <div className="features-section container mt-5">
        <h2 className="text-center mb-4">Why Choose Let's Go?</h2>
        
        {/* <div className="row text-center">
          <div className="col-md-4">
            <img
              src={icon1}
              alt="AI Suggestions"
              style={{maxWidth:'140px'}}
            />
            <h4>AI-Powered Suggestions</h4>
            <p>Get tailored travel ideas based on your preferences.</p>
          </div>
          <div className="col-md-4">
            <img
              src={icon2}
              alt="Seamless Booking"
              style={{maxWidth:'140px'}}
            />
            <h4>Seamless Booking</h4>
            <p>Book flights and hotels in a few clicks.</p>
          </div>
          <div className="col-md-4">
            <img
              src={icon3}
              alt="Custom Itineraries"
              style={{maxWidth:'140px'}}
            />
            <h4>Custom Itineraries</h4>
            <p>Build personalized itineraries for your trips.</p>
          </div>
        </div> */}

        <div className="row text-center mt-5">
          <div className="col-md-4">
            <div className="card shadow border-0">
              <div className="card-body">
                <img src={icon1} alt="AI Suggestions" className="card-img-top mx-auto d-block mb-3" style={{ maxWidth: '100px' }} />
                <h5 className="card-title">AI-Powered Suggestions</h5>
                <p className="card-text">Get tailored travel ideas based on your preferences.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow border-0">
              <div className="card-body">
                <img
                  src={icon2} alt="Seamless Booking" className="card-img-top mx-auto d-block mb-3" style={{ maxWidth: '100px' }} />
                <h5 className="card-title">Seamless Booking</h5>
                <p className="card-text">Book flights and hotels in a few clicks.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow border-0">
              <div className="card-body">
                <img src={icon3} alt="Custom Itineraries" className="card-img-top mx-auto d-block mb-3" style={{ maxWidth: '100px' }} />
                <h5 className="card-title">Custom Itineraries</h5>
                <p className="card-text">Build personalized itineraries for your trips.</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default App;
