import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import "../assets/css/places.css";
import image1 from "../assets/images/bg-image-1.jpg";
import image2 from "../assets/images/bg-image-2.png";
import image3 from "../assets/images/bg-image-3.jpg";
import { FaSearch } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

function Places() {
  const [currentBackground, setCurrentBackground] = useState(0);

  const backgrounds = [image1, image2, image3]; // Background images array

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 6080); // Change background every 6.08 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <>
      <Header />
      <div
        className="banner"
        style={{
          backgroundImage: `url(${backgrounds[currentBackground]})`,
        }}
      >
        <div className="banner-content">
          <div className="content-left">
            <h1>Explore Beautiful Places</h1>
            <p>Discover amazing destinations around the world.</p>
          </div>
          <div className="content-right">
            {backgrounds.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Small ${index + 1}`}
                className={index === currentBackground ? "unblur" : "blur"}
              />
            ))}
          </div>
        </div>
        <div className="search-bar">

          <form>
            <div className="form-group">
                <b>Destination</b>
                <select className="form-control mt-2">
                    <option>--Select Destination--</option>
                    <option>New York, USA</option>
                    <option>Paris, France</option>
                    <option>Tokyo, Japan</option>
                </select>

            </div>

            <div className="form-group">
                <b>No. of Days</b>
                <input className="form-control mt-2" type="number" placeholder="Ex.3" required/>
            </div>

            <div className="form-group">
                <b>Budget</b>
                <select className="form-control mt-2">
                    <option>--Select Budget--</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
            </div>

            <div className="form-group">
                <b>Travelling Type</b>
                <select className="form-control mt-2">
                    <option>--Select Type--</option>
                    <option>Just Me</option>
                    <option>A Couple</option>
                    <option>Familly</option>
                    <option>Friends</option>
                </select>
            </div>
            
            <div className="form-group">
                <br />
                <button type="submit" className="form-control mt-2" style={{fontSize: "16px"}}><FaSearch /> Search</button>
            </div>
          </form>

        </div>
      </div>

      <div className="main" id="places">
        <div className="places-cards container">
            <div className="row" style={{rowGap: '20px'}}>

                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={image1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Maldives</h5>
                            <div className="card-text">
                                <span><IoMdTime /> 2 days 3 nights</span>
                                <span><FaRegUser /> 2 guests <span className="travel-type">(couple)</span></span>
                            </div>

                            <div className="card_footer mt-4" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p><b style={{ fontSize: '20px' }}>Rs. 19,000</b> <span style={{ color: 'grey' }}>/Person</span> </p>
                                <button
                                    onClick={() => handleBooking(2, 'couple')}
                                    className="btn btn-secondary"
                                    style={{ borderRadius: '25px' }}
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="card">
                        <img class="card-img-top" src={image3} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <div class="card-text">
                                <span><IoMdTime /> 2 days 3 nights</span>
                                <span><FaRegUser /> 4-6 guest</span>
                            </div>

                            <div className="card_footer mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <p><b style={{fontSize: '20px'}}>Rs. 1000</b> <span style={{color: 'grey'}}>/Person</span> </p>
                                <a href="#" class="btn btn-secondary" style={{borderRadius:'25px'}}>Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="card">
                        <img class="card-img-top" src={image1} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <div class="card-text">
                                <span><IoMdTime /> 2 days 3 nights</span>
                                <span><FaRegUser /> 4-6 guest</span>
                            </div>

                            <div className="card_footer mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <p><b style={{fontSize: '20px'}}>Rs. 1000</b> <span style={{color: 'grey'}}>/Person</span> </p>
                                <a href="#" class="btn btn-secondary" style={{borderRadius:'25px'}}>Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="card">
                        <img class="card-img-top" src={image2} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <div class="card-text">
                                <span><IoMdTime /> 2 days 3 nights</span>
                                <span><FaRegUser /> 4-6 guest</span>
                            </div>

                            <div className="card_footer mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <p><b style={{fontSize: '20px'}}>Rs. 1000</b> <span style={{color: 'grey'}}>/Person</span> </p>
                                <a href="#" class="btn btn-secondary" style={{borderRadius:'25px'}}>Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="card">
                        <img class="card-img-top" src={image3} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <div class="card-text">
                                <span><IoMdTime /> 2 days 3 nights</span>
                                <span><FaRegUser /> 4-6 guest</span>
                            </div>

                            <div className="card_footer mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <p><b style={{fontSize: '20px'}}>Rs. 1000</b> <span style={{color: 'grey'}}>/Person</span> </p>
                                <a href="#" class="btn btn-secondary" style={{borderRadius:'25px'}}>Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <Footer />

    </>
  );
}

export default Places;
