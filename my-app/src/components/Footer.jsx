import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";




const Footer = () => {
  return (
   <>
   <hr style={{marginTop:"0px",width:"100%",border:"1px solid black"}}></hr>
   <div className='footer'>
    <div>
    <Link className='myapp' to="terms">Terms Of Services</Link><br/>
    <Link className='myapp' to="privacy">Privacy Policy</Link>
    </div>
    <div>
    <FaFacebook />
    <FaInstagram />
    <FaXTwitter />
    <br/><br/>
    <div style={{display:"flex"}}>
    <IoCall/><p>call us at :</p>
    </div>
    <h5>987654321</h5>
    </div>
    <div>
    <Link className='myapp' to="explorenorthindia">North India</Link><br/>
    <Link className='myapp' to="exploresouthindia">South India</Link><br/>
    <Link className='myapp' to="about">About Tourly</Link><br/>
    </div>
    <div>
    <Link className='myapp' to="home">Home</Link><br/>
    <Link className='myapp' to="blog">Client Testimonals</Link><br/>
    <Link className='myapp' to="contact">Contact Us</Link><br/>
    </div>
    <div>
        <img src="https://tourly.pt/static/media/payment-methods.14097047.svg" alt="" />
    </div>
   </div>
   <p style={{textAlign:"center"}}>© Tourly 2024 | <span style={{color:"#1D98AD"}}>Build By Elgoritmo</span>| Credits</p>
   </>
  )
}

export default Footer