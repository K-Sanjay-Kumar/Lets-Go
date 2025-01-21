import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import "../assets/css/places.css";
import Card from "../constants/Card";
import image1 from "../assets/images/bg-image-1.jpg";
import image2 from "../assets/images/bg-image-2.png";
import image3 from "../assets/images/bg-image-3.jpg";
import { FaSearch } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";


function Places() {
  const [currentBackground, setCurrentBackground] = useState(0);

  const backgrounds = [image1, image2, image3]; // Background images array

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 6080); // Change background every 6.08 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const travelData = [
      { id: 1, image: image1, guests: '5 to 10', title: "Beach Vacation", travelType: "Family", price: 1000 },
      { id: 2, image: image2, guests: '1', title: "Mountain Hiking", travelType: "Solo", price: 800 },
      { id: 3, image: image3, guests: '2', title: "City Exploration", travelType: "Couple", price: 1200 },
      { id: 4, image: image1, guests: '3 to 4', title: "Desert Safari", travelType: "Friends", price: 900 },
      { id: 5, image: image2, guests: '5 to 10', title: "Cruise Getaway", travelType: "Family", price: 1500 },
  ];

  const [destination, setDestination] = useState("");
  const [locations, setLocations] = useState([]);

  // Fetch locations from API
  const fetchLocations = async (query) => {
    if (query.length < 3) {
      setLocations([]); // Reset if the query is too short
      return;
    }
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1&limit=5`);
      const data = await response.json();
      setLocations(data.map((loc) => loc.display_name));
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  // Handle destination input change
  const handleDestinationChange = (event) => {
    const value = event.target.value;
    setDestination(value);
    fetchLocations(value);
  };

  return (
    <>
      <Header />

      <div className="banner" style={{backgroundImage: `url(${backgrounds[currentBackground]})`,}}>
        <div className="banner-content">
          <div className="content-left">
            <h1 style={{fontSize:'70px'}}>Explore Beautiful <br />Places</h1>
            <h2>Tell us your travel preference🌴🏖️</h2>
            <p>Just provide some basic details</p>
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
      </div>

      <div className="main-content p-5">
        <div className="container">

          <div className="content-details-form mt-5">
            <div className="destination">
              <h4>What is the destination 🗺️?</h4>
              <input type="text" className="form-control mt-2" placeholder="Type a destination..." value={destination} onChange={handleDestinationChange} />
                <ul className="dropdown">
                  {locations.map((location, index) => (
                    <li
                      key={index}
                      className="dropdown-item"
                      onClick={() => {
                        setDestination(location); // Update destination state
                        setLocations([]); // Clear the dropdown
                      }}
                    >
                      {location}
                    </li>
                  ))}
                </ul>
            </div>

            <div className="travel-days mt-5">
              <h4>How many days are you planning your trip ⏲️?</h4>
              <input type="number" className="form-control" placeholder="Ex.3"/>
            </div>

            <div className="travel-budget-section mt-5">
                <h4>What is your budget 🪙?</h4>
                <div className="travel-budget">
                  <div className="budget-card">
                    <h3>💵</h3>
                    <h4>Cheap</h4>
                    <p>Stay conscious of costs</p>
                  </div>
                  
                  <div className="budget-card">
                    <h3>💰</h3>
                    <h4>Moderate</h4>
                    <p>Keep cost on the average side</p>
                  </div>

                  <div className="budget-card">
                    <h3>💸</h3>
                    <h4>Luxury</h4>
                    <p>Don't worry about cost</p>
                  </div>
                </div>
            </div>

            <div className="travel-type mt-5">
              <h4>Who do you plan on traveling with on your next adventure🧍?</h4>
              <div className="types">
                <div className="type-card">
                  <h3>🧍</h3>
                  <h4>Just Me</h4>
                  <p>Traveling solo</p>
                </div>

                <div className="type-card">
                  <h3>👩‍❤️‍👨</h3>
                  <h4>A Couple</h4>
                  <p>Traveling with a partner</p>
                </div>

                <div className="type-card">
                  <h3>👨‍👩‍👧‍👦</h3>
                  <h4>Family</h4>
                  <p>Traveling with family</p>
                </div>

                <div className="type-card">
                  <h3>👬</h3>
                  <h4>Friends</h4>
                  <p>Traveling with friends</p>
                </div>
              </div>
            </div>

            <div className="generate-button text-center">
              <button type="submit" className="btn btn-success mt-5" style={{fontSize: "20px"}}>Generate ✨</button>
            </div>

          </div>
        </div>
      </div>

    <Footer />

    </>
  );
}

export default Places;
