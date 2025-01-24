import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { TbLogout } from "react-icons/tb";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';


function Header () {

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
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/My-Trips">My Trips</Nav.Link>
            <Nav.Link href="/Contact-Us">Contact-Us</Nav.Link>
          </Nav>

          {/* Add a right-aligned Sign In button */}
          <Nav className="ms-auto">
            {localStorage.getItem('user') ? 
            <Button className='bg-black' onClick={()=>{
              googleLogout();
              localStorage.clear();
              window.location.reload();
            }}>
              Sign Out <TbLogout /></Button> : 
              
              <Button className='bg-black' onClick={login}>Sign In</Button>}

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;