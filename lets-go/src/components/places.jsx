import React, { useEffect, useState } from "react";
import Header from "./header";
import "./places.css";
import image1 from "../assets/677605.jpg";
import image2 from "../assets/889209.png";
import image3 from "../assets/thumb-1920-311151.jpg";
import { FaSearch } from "react-icons/fa";

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
    </>
  );
}

export default Places;
