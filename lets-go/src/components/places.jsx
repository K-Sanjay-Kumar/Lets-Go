import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../assets/css/places.css";
import image1 from "../assets/images/bg-image-1.jpg";
import image2 from "../assets/images/bg-image-2.png";
import image3 from "../assets/images/bg-image-3.jpg";
import logo from '../assets/logo.png';
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { chatSession } from "../service/AIgenerate";

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

import { doc, setDoc } from "firebase/firestore";
import { db } from "../service/firebaseConfig";

import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function Places() {
  const [currentBackground, setCurrentBackground] = useState(0);
  const backgrounds = [image1, image2, image3]; // Background images array
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 6080); // Change background every 6.08 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]);


  const [openDialogue, setOpenDialogue] = useState(false);
  const [destination, setDestination] = useState("");
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const [FormData, setFormData] = useState({}); // Local form state
  const navigate=useNavigate();

  const handleInputChange = (key, value) => {
    setFormData({ ...FormData, [key]: value });
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      GetUserProfile(tokenResponse)
    },
    onError:(error)=>console.log(error)
  });

  const OnGenerateTrip = async() => {
    
    const user=localStorage.getItem('user');
    if(!user){
      setOpenDialogue(true);
      return;
    }

    if (!FormData?.budget || !FormData?.destination || !FormData?.noOfDays || !FormData?.traveler) {
      toast.error("Please fill all the fields to generate your trip");
      return;
    } else if (FormData?.noOfDays > 5) {
      toast.error("You can only generate your trip for 5 days or less");
      return;
    } else if (FormData?.noOfDays <= 0) {
      toast.error("Enter Correct Number of Days");
      return;
    }

    setLoading(true);
    const PROMPT = `Generate a travel plan for:
    - Location: ${FormData?.destination}
    - Duration: ${FormData?.noOfDays} days
    - Travelers: ${FormData?.traveler}
    - Budget: ${FormData?.budget}

    Return the response in JSON format like this:

    {
    "Hotels": [
        {
        "HotelName": "string",
        "HotelAddress": "string",
        "HotelPrice": "number",
        "HotelImageUrl": "string",
        "HotelRating": "number",
        "Descriptions": "string"
        }
    ],
    "Itinerary": [
        {
        "Day": "number",
        "PlaceName": "string",
        "PlaceDetails": "string",
        "PlaceImageUrl": "string",
        "TicketPricing": "number",
        "PlaceRating": "number",
        "TravelTime": "string",
        "BestTimeToVisit": "string"
        }
    ]
    }

    Make sure to include both "Hotels" and "Itinerary" keys in the response.
    `;

    const result = await chatSession.sendMessage(PROMPT);
    console.log(result?.response?.text());
    SaveTrip(result?.response?.text())
    setLoading(false);

  };

  const GetUserProfile=(tokenResponse)=>{
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenResponse?.access_token}`, {
      headers:{
        Authorization: `Bearer ${tokenResponse?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((response)=>{
      localStorage.setItem('user',JSON.stringify(response.data));
      setOpenDialogue(false);
      OnGenerateTrip();
    })
  }

  const SaveTrip = async(TripData) =>{
      const user=JSON.parse(localStorage.getItem('user'));
      const docId=Date.now().toString();

      await setDoc(doc(db, 'Trips', docId), {
          userSelection: FormData,
          tripData: JSON.parse(TripData),
          userEmail: user?.email,
          id: docId
      });

      // Save to Local Storage
      const existingPlans = JSON.parse(localStorage.getItem("travelPlans")) || [];
      localStorage.setItem(
          "travelPlans",
          JSON.stringify([...existingPlans, { id: docId, tripData: TripData, userSelection: FormData }])
      );

      navigate('/travel-plan/'+docId);
      
  }

  return (
    <>
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
              <input type="text" className="form-control mt-2" placeholder="Type a destination..." value={destination} onChange={handleDestinationChange}/>
                <ul className="dropdown">
                  {locations.map((location, index) => (
                    <li
                      key={index}
                      className="dropdown-item"
                      onClick={() => {
                        setDestination(location);
                        setLocations([]);
                        handleInputChange('destination', location);
                      }}
                    >
                      {location}
                    </li>
                  ))}
                </ul>
            </div>

            <div className="travel-days mt-5">
              <h4>How many days are you planning your trip ⏲️?</h4>
              <input type="number" className="form-control" placeholder="Ex.3" onChange={(e) => handleInputChange('noOfDays', e.target.value)}/>
            </div>

            <div className="travel-budget-section mt-5">
                <h4>What is your budget 🪙?</h4>
                <div className="travel-budget">
                  <div className={`budget-card ${FormData?.budget=='Cheap'&&'shadow-lg border-black'}`} onClick={() => handleInputChange('budget', 'Cheap')}>
                    <h3>💵</h3>
                    <h4>Cheap</h4>
                    <p>Stay conscious of costs</p>
                  </div>
                  
                  <div className={`budget-card ${FormData?.budget=='Moderate'&&'shadow-lg border-black'}`} onClick={() => handleInputChange('budget', 'Moderate')}>
                    <h3>💰</h3>
                    <h4>Moderate</h4>
                    <p>Keep cost on the average side</p>
                  </div>

                  <div className={`budget-card ${FormData?.budget=='Luxury'&&'shadow-lg border-black'}`} onClick={() => handleInputChange('budget', 'Luxury')}>
                    <h3>💸</h3>
                    <h4>Luxury</h4>
                    <p>Don't worry about cost</p>
                  </div>
                </div>
            </div>

            <div className="travel-type mt-5">
              <h4>Who do you plan on traveling with on your next adventure🧍?</h4>
              <div className="types">
                <div className={`type-card ${FormData?.traveler=='1 People'&&'shadow-lg border-black'}`} onClick={() => handleInputChange('traveler', '1 People')}>
                  <h3>🧍</h3>
                  <h4>Just Me</h4>
                  <p>Traveling solo</p>
                </div>

                <div className={`type-card ${FormData?.traveler=='2 People'&&'shadow-lg border-black'}`} onClick={() => handleInputChange('traveler', '2 People')}>
                  <h3>👩‍❤️‍👨</h3>
                  <h4>A Couple</h4>
                  <p>Traveling with a partner</p>
                </div>

                <div className={`type-card ${FormData?.traveler=='3 to 5 People'&&'shadow-lg border-black'}`} onClick={() => handleInputChange('traveler', '3 to 5 People')}>
                  <h3>👨‍👩‍👧‍👦</h3>
                  <h4>Family</h4>
                  <p>Traveling with family</p>
                </div>

                <div className={`type-card ${FormData?.traveler=='5 to 10 People'&&'shadow-lg border-black'}`} onClick={() => handleInputChange('traveler', '5 to 10 People')}>
                  <h3>👬</h3>
                  <h4>Friends</h4>
                  <p>Traveling with friends</p>
                </div>
              </div>
            </div>

            <div className="generate-button text-center">
              <button type="submit" className="btn btn-success mt-5" style={{fontSize: "20px"}} 
              disabled={loading}
              onClick={OnGenerateTrip}>
              {loading ? 
                <AiOutlineLoading3Quarters className="animate-spin" />: 'Generate ✨'
              }
              </button>
            </div>

            <Dialog open={openDialogue} onClose={() => setOpenDialogue(false)}>
              <DialogTitle>
                <img src={logo} alt="Lets Go" style={{maxWidth:'122px'}}/>
              </DialogTitle>
              <DialogContent>
                {/* You need to login to generate a trip. */}
                <h3 className="font-bold text-lg">Sign In with Google</h3>
                <p>Sign In to the App with Google authentication securely</p>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenDialogue(false)}>Close</Button>
                {/* Add a button to redirect to the login page */}
                
                <Button className="login-button"  onClick={login}   ><FcGoogle className="login-google-icon"/> &nbsp; Login</Button> 
              
              </DialogActions>
            </Dialog>

            <ToastContainer />

          </div>
        </div>
      </div>

    </>
  );
}

export default Places;
