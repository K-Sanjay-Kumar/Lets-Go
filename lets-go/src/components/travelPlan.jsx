import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebaseConfig";
import hotelimg from "../assets/images/Hotel.jpg";
import "../assets/css/TravelPlan.css";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

function TravelPlan() {
    const [hotels, setHotels] = useState([]);
    const [itinerary, setItinerary] = useState([]);
    const [loader, setLoader] = useState(true);
    const [destination,setDestination] = useState("");
    const { tripId } = useParams(); // Extract `tripId` from the URL

    useEffect(() => {
        const fetchTripData = async () => {
          const travelPlans = localStorage.getItem("travelPlans");
          let specificTripData;
    
          if (travelPlans) {
            try {
              const parsedData = JSON.parse(travelPlans);
              if (parsedData && parsedData.length > 0) {
                specificTripData = parsedData.find((data) => data.id === tripId);
    
                if (specificTripData) {
                  const tripData = JSON.parse(specificTripData.tripData || "{}");
                  setDestination(specificTripData?.userSelection?.destination || "");
                  setHotels(tripData.Hotels || []);
                  setItinerary(tripData.Itinerary || []);
                  setLoader(false); // Exit early if data is found
                  return;
                }
              }
            } catch (error) {
              console.error("Error parsing travelPlans data:", error);
            }
          }
    
          // Check Firestore database if not found in localStorage
          try {
            const docRef = doc(db, "Trips", tripId);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
              const tripData = docSnap.data();
              setDestination(tripData?.userSelection?.destination || "");
              setHotels(tripData?.tripData?.Hotels || []);
              setItinerary(tripData?.tripData?.Itinerary || []);
            } else {
              console.error(`No trip data found for id: ${tripId}`);
            }
          } catch (error) {
            console.error("Error fetching trip data from database:", error);
          }
    
          setLoader(false); // Ensure loader is updated
        };
    
        fetchTripData();
      }, [tripId]);
    
      if (loader) {
        return <div>Loading...</div>;
      }

    return (
        <div className="travel-plan">
            <h1 className="plan-title"><span style={{fontSize:'18px'}}>Your Travel Plan for</span> <span style={{fontSize:'36px'}}>{destination}✈️</span></h1>

            {/* Hotels Section */}
            <div className="hotels-section">
                <h2 className="plan-subtitles" style={{fontWeight:'700'}}>Hotels:</h2>

                <div className="hotels">
                    {hotels.map((hotel, index) => (
                        <div key={index} className="hotel-card">
                            <div className="hotel-card-image text-center">
                              <img src={hotelimg} alt={hotel.HotelName} style={{ maxWidth: '250px' }} />
                            </div>
                            <div className="hotel-card-content p-3">
                                <h3 style={{fontWeight:'600'}}>{hotel.HotelName} <span style={{fontSize:'15px'}}>( {hotel.HotelRating} <FaStar style={{color:'orange'}}/>)</span> </h3>
                                <p style={{fontSize:'13px'}}>{hotel.Descriptions}</p>
                                <p><strong>Price: </strong> ₹{hotel.HotelPrice}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Itinerary Section */}
            <div className="itinerary-section mt-5">
                <h2 className="plan-subtitles" style={{fontWeight:'700'}}>Day-By-Day Plan:</h2>

                {/* Group the itinerary data by days */}
                {Object.entries(
                    itinerary.reduce((acc, place) => {
                        acc[place.Day] = acc[place.Day] || [];
                        acc[place.Day].push(place);
                        return acc;
                    }, {})
                ).map(([day, places], index) => (
                    <div key={index} className={`mt-2 day-plan ${index % 2 === 0 ? "left" : "right"}`}>
                        <h3>{`Day ${day}`}</h3>
                        <p className="best-time">
                            Best Time to Visit: {places[0]?.BestTimeToVisit}
                        </p>
                        <div className="places">
                            {places.map((place, placeIndex) => (
                                <div key={placeIndex} className="place-card">
                                    <h4 style={{fontWeight:'600', fontSize:'25px'}}>{place.PlaceName} <span style={{fontSize:'15px'}}> ({place.PlaceRating} <FaStar style={{color:'orange'}} />)</span> </h4>
                                    <p style={{fontSize:'13px'}}>{place.PlaceDetails}</p>
                                    <p><strong>Travel Time:</strong> {place.TravelTime}</p>
                                    <p><strong>Ticket Price:</strong> ₹{place.TicketPricing}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );

}

export default TravelPlan;