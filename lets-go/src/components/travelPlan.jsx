import React, { useContext, useEffect, useState } from "react";
import { FormDataContext } from "./FormDataContext";
import { chatSession } from "../service/AIgenerate";
import hoteimg from "../assets/images/Hotel.jpg";
import Header from "../constants/header";
import Footer from "../constants/footer";
import "../assets/css/TravelPlan.css";

function TravelPlan() {
  const { formData } = useContext(FormDataContext);
  const [loading, setLoading] = useState(true);
  const [tripData, setTripData] = useState(null);

  useEffect(() => {
    const generateTravelPlan = async () => {
      if (formData) {
        const PROMPT = `Generate Travel Plan for Location: ${formData.destination}, for ${formData.noOfDays} Days for ${formData.traveler} with a ${formData.budget} Budget, give me Hotels options list Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for ${formData.noOfDays} days with each day plan with best time to visit in JSON format.`;
        
        const result = await chatSession.sendMessage(PROMPT);
        const response = await result.response.text();

        setTripData(JSON.parse(response));
        setLoading(false);
      }
    };
    generateTravelPlan();
  }, [formData]);


  if (loading) {
    return <div className="loading">Loading your travel plan...</div>;
  }

  return (
    <>
        <Header />
        <div className="travel-plan">
            <h1 className="plan-title"><span style={{fontSize:'18px'}}>Your Travel Plan for</span> <span style={{fontSize:'36px'}}>{formData.destination}</span></h1>

            {/* Hotels Section */}
            <div className="hotels-section">
                <h2 className="plan-subtitles">Hotels</h2>
                {tripData[0]?.hotels.map((hotel, index) => (
                <div key={index} className="hotel-card">
                    <img src={hoteimg} alt={hotel.HotelName} style={{maxWidth:'250px'}} />
                    <h3>{hotel.HotelName}</h3>
                    <p>{hotel.descriptions}</p>
                    <p>Price: ₹{hotel.Price}</p>
                    <p>Rating: {hotel.rating}</p>
                </div>
                ))}
            </div>

            {/* Itinerary Section */}
            <div className="itinerary-section">
                <h2 className="plan-subtitles">Itinerary</h2>
                {Object.keys(tripData[0]?.itinerary || {}).map((day, index) => (
                <div key={day} className={`day-plan ${index % 2 === 0 ? "left" : "right"}`}>
                    <h3>{`${day.toUpperCase()}`}</h3>
                    <p className="best-time">Best Time to Visit: {tripData[0].itinerary[day].best_time_to_visit}</p>
                    <div className="places">

                    {tripData[0].itinerary[day].places.map((place, idx) => (
                        <div key={idx} className="place-card">
                        <h4>{place.placeName}</h4>
                        <p>{place.PlaceDetails}</p>
                        <p>Ticket Price: {place.ticketPricing}</p>
                        <p>Rating: {place.rating}</p>
                        <p>Travel Time: {place.travel_time}</p>
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </div>
        <Footer />
    </>
  );
}

export default TravelPlan;
