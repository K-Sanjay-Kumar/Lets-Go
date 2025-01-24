import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import icon1 from './assets/images/ai-suggest.png';
import icon2 from './assets/images/booking.png';
import icon3 from './assets/images/notebook.png';
import './App.css';

import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function App() {

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

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

  const handleButtonClick = () => {
    if (user) {
      // If user data exists, redirect to /Generate-trip
      navigate('/Genrate-Trip');
    } else {
      // If user data doesn't exist, execute login
      login();
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section text-center">
        <h1 className="heading-title">Discover Your Next Adventure with AI</h1>
        <h2 className="heading-subtitle">Plan Your Trip at Your Fingertips</h2>
        <Button className="btn mt-4 bg-black" onClick={handleButtonClick}>Get Started</Button>
      </div>

      {/* Features Section */}
      <div className="features-section container mt-5">
        <h2 className="text-center mb-4">Why Choose Let's Go?</h2>
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
