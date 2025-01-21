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

                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Type a destination..."
                  value={destination}
                  onChange={handleDestinationChange}
                />

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

            <div className="form-group">
                <b>No. of Days</b>
                <input className="form-control mt-2" type="number" placeholder="Ex.3" required/>
            </div>

            <div className="form-group">
                <b>Budget</b>
                <select className="form-control mt-2">
                    <option>--Select Budget--</option>
                    <option>💵 Low</option>
                    <option>💰 Medium</option>
                    <option>💸 High</option>
                </select>
            </div>

            <div className="form-group">
                <b>Travelling Type</b>
                <select className="form-control mt-2">
                    <option>--Select Type--</option>
                    <option>🧍Just Me</option>
                    <option>👫 A Couple</option>
                    <option>👨‍👩‍👧‍👦 Familly</option>
                    <option>👬 Friends</option>
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

                {travelData.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        travelType={item.travelType}
                        price={item.price}
                        guests={item.guests}
                    />
                ))}

            </div>
        </div>
      </div>
    <Footer />

    </>
  );
}

export default Places;
