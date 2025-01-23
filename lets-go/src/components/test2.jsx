import React, { useContext, useEffect, useState } from "react";
import { FormDataContext } from "./FormDataContext";
import { chatSession } from "../service/AIgenerate";
import hotelimg from "../assets/images/Hotel.jpg";
import Header from "../constants/header";
import Footer from "../constants/footer";
import { FaStar } from "react-icons/fa";
import "../assets/css/TravelPlan.css";

function TravelPlan() {
    const { formData } = useContext(FormDataContext);
    const [hotels, setHotels] = useState([]);
    const [itinerary, setItinerary] = useState([]);
    let parsedResponse = null;


    useEffect(() => {
        const generateTravelPlan = async () => {
            if (formData) {
                // const PROMPT = `Generate Travel Plan for Location: ${formData.destination}, for ${formData.noOfDays} Days for ${formData.traveler} with a ${formData.budget} Budget, give me a {Hotels} options list with {HotelName}, {HotelAddress}, {HotelPrice}, {hotelImageUrl}, {HotelRating}, {descriptions} and suggest itinerary with {placeName}, {PlaceDetails}, {PlaceImageUrl}, {ticketPricing}, {PlaceRating}, {TravelTime} each of the location for ${formData.noOfDays} days with each day plan with {BestTimeToVisit} in JSON format.`;
                // const PROMPT = `Generate Travel Plan for Location: Goa, India, for 1 Days for 5 to 10 People with a Cheap Budget, give me {Hotels} options list with {HotelName}, {HotelAddress}, {HotelPrice}, {hotelImageUrl}, {HotelRating}, {descriptions} and suggest itinerary with {placeName}, {PlaceDetails}, {PlaceImageUrl}, {ticketPricing}, {PlaceRating}, {TravelTime} each of the location for 1 days with each day plan with best time to visit in JSON format.`;
                const PROMPT = `Generate a travel plan for:
                - Location: ${formData.destination}
                - Duration: ${formData.noOfDays} days
                - Travelers: ${formData.traveler}
                - Budget: ${formData.budget}

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
`
                console.log(PROMPT);

                try {
                    const result = await chatSession.sendMessage(PROMPT);
                    const textResponse = await result.response.text();

                    // Parse the response into JSON
                    parsedResponse = JSON.parse(textResponse);
                    // console.log("Parsed Response:", parsedResponse);

                    // Update the state with parsed data
                    setHotels(parsedResponse.Hotels || []);
                    setItinerary(parsedResponse.Itinerary || []);
                } catch (error) {
                    // console.error("Error generating travel plan:", error);
                    alert("Error generating travel plan. Please try again later.");
                }

                setHotels(parsedResponse.Hotels || []);
                setItinerary(parsedResponse.Itinerary || []);
            }

        };
        generateTravelPlan();
    }, [formData]);

    useEffect(() => {
        // Log updated state values after they are set
        // console.log("Hotels:", hotels);
        // console.log("Itinerary:", itinerary);
    }, [hotels, itinerary]);


    return (
        <>
            <Header />

            <div className="travel-plan">
                <h1 className="plan-title"><span style={{fontSize:'18px'}}>Your Travel Plan for</span> <span style={{fontSize:'36px'}}>{formData.destination}✈️</span></h1>

                {/* Hotels Section */}
                <div className="hotels-section">
                    <h2 className="plan-subtitles">Hotels</h2>

                    <div className="hotels">
                        {hotels.map((hotel, index) => (
                            <div key={index} className="hotel-card">
                                <img src={hotelimg} alt={hotel.HotelName} style={{ maxWidth: '250px' }} />
                                <div className="hotel-card-content p-3">
                                    <h3 style={{fontWeight:'600'}}>{hotel.HotelName}</h3>
                                    <p style={{fontSize:'13px'}}>{hotel.Descriptions}</p>
                                    <div className="hotel-card-footer">
                                        <p><span style={{fontSize:'20px'}}>💵</span> ₹{hotel.HotelPrice}</p>
                                        <p><span style={{color:'orange', fontSize:'20px'}}><FaStar /></span> {hotel.HotelRating}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>


                <div className="itinerary-section mt-5">
                    <h2 className="plan-subtitles">Day-By-Day Plan</h2>

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
                                        <h4 style={{fontWeight:'600'}}>{place.PlaceName}</h4>
                                        <p style={{fontSize:'13px'}}>{place.PlaceDetails}</p>
                                        <p><strong>Ticket Price:</strong> ₹{place.TicketPricing}</p>
                                        <p><span style={{color:'orange', fontSize:'20px'}}><FaStar /></span> {place.PlaceRating}</p>
                                        <p><strong>Travel Time:</strong> {place.TravelTime}</p>
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
