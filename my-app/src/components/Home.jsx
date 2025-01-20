import React from 'react'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import WaterVideo from '../Assets/WaterVideo.mp4';
const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='overlay'></div>
        <video src={WaterVideo} muted autoPlay loop type="WaterVideo/mp4"></video>
        <h3 className='name'>TOURLY</h3>
        <br />
        <h1 className='tagline'>JOURNEY TO EXPLORE WORLD</h1>
        <br />
        <p className='quote'>Travel far enough, you meet yourself.....</p>
      </section>
      <div className='sec-div'>
      <div className='homediv'>
        <div className='homecontent conatiner'>
          <div className='textdiv'>
            <span className='smalltext' style={{color:"black"}}>Our Packages : </span>
            <h1 className='hometitle'>Search Your Holidays...</h1>
          </div>
          <div className="cardDiv grid w-50">
            <div className="destinationInput">
              <label htmlFor='city'>search your destination:</label>
              <div className="input flex">
                <input type='text' placeholder='Enter name Here...' style={{ marginTop: "6px" }}></input>
                <GrLocation className='icon' />
              </div>
            </div>
            <div className="dateInput">
              <label style={{ marginRight: "10px" }} htmlFor='city'>select your date:</label>
              <div className="input flex">
                <input type='date' style={{ marginTop: "6px", marginLeft: "20px" }}></input>
              </div>
            </div>
            <div className="priceInput">
              <div className="label-total flex">
                <label htmlFor='price'>maxprice :</label>
                <h3 className='total'>Rs.100000</h3>
              </div>
              <div className="input flex">
                <input type='range' max='100000' min='1000' style={{ textAlign: "center", marginTop: "12px" }} />
              </div>
            </div>
            <div className="searchoptions flex">
              <HiFilter className='icon' style={{ color: 'white', fontSize: '24px' }} />
              <span style={{ color: 'white' }}>More Filters</span>

            </div>
          </div>
        </div>
      </div>
      </div>

    </>
  )
}

export default Home