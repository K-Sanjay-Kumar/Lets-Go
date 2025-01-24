import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo.png';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { TbLogout } from 'react-icons/tb';
import axios from 'axios';


function Header () {

  const user= JSON.parse(localStorage.getItem('user'));

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

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <Button variant="outline" onClick={()=>{ googleLogout();
                localStorage.clear();
                window.location.reload();
                }} 
                className="w-100 d-flex align-items-center justify-content-start">
          <TbLogout style={{ marginRight: '10px' }} />
          Sign Out
        </Button>
      </Popover.Body>
    </Popover>
  );


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt='Lets Go' style={{maxWidth:'145px'}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          {/* Add a right-aligned Sign In button */}
          <Nav className="ms-auto">
            {localStorage.getItem('user') ? 
            <div>
              <a href="/Genrate-Trip"><Button variant='outline' className='rounded-full' style={{marginRight:'15px'}}>Create Trip +</Button></a>
              <a href="/My-Trips"><Button variant='outline' className='rounded-full' style={{marginRight:'15px'}}>My Trips</Button></a>
              <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                <img src={user?.picture} alt={user?.name} className="user-profile" />
              </OverlayTrigger>
            </div>
             : 
              
              <Button className='bg-black' onClick={login}>Sign In</Button>}

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;