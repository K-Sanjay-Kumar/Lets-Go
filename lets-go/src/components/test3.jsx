// import React, { useContext, useEffect, useState } from "react";
// import { FormDataContext } from "./FormDataContext";
// import { chatSession } from "../service/AIgenerate";
// import hotelimg from "../assets/images/Hotel.jpg";
// import { FaStar } from "react-icons/fa";
// import gif from '../assets/images/loading.gif';
// import "../assets/css/TravelPlan.css";
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../service/firebaseConfig";

// function TravelPlan() {
//     const { formData } = useContext(FormDataContext);
//     const [loader, setLoader] = useState(true);
//     const [hotels, setHotels] = useState([]);
//     const [itinerary, setItinerary] = useState([]);
//     let parsedResponse = null;


//     useEffect(() => {
//         const generateTravelPlan = async () => {
//             setLoader(true);
//             if (formData) {
//                 const PROMPT = `Generate a travel plan for:
//                 - Location: ${formData.destination}
//                 - Duration: ${formData.noOfDays} days
//                 - Travelers: ${formData.traveler}
//                 - Budget: ${formData.budget}

//                 Return the response in JSON format like this:

//                 {
//                 "Hotels": [
//                     {
//                     "HotelName": "string",
//                     "HotelAddress": "string",
//                     "HotelPrice": "number",
//                     "HotelImageUrl": "string",
//                     "HotelRating": "number",
//                     "Descriptions": "string"
//                     }
//                 ],
//                 "Itinerary": [
//                     {
//                     "Day": "number",
//                     "PlaceName": "string",
//                     "PlaceDetails": "string",
//                     "PlaceImageUrl": "string",
//                     "TicketPricing": "number",
//                     "PlaceRating": "number",
//                     "TravelTime": "string",
//                     "BestTimeToVisit": "string"
//                     }
//                 ]
//                 }

//                 Make sure to include both "Hotels" and "Itinerary" keys in the response.
// `
//                 console.log(PROMPT);

//                 try {
//                     const result = await chatSession.sendMessage(PROMPT);
//                     const textResponse = await result.response.text();

//                     // Parse the response into JSON
//                     parsedResponse = JSON.parse(textResponse);

//                     // Handle the varying response formats
//                     if (Array.isArray(parsedResponse) && parsedResponse[0]?.Hotels && parsedResponse[0]?.Itinerary) {
//                         parsedResponse = parsedResponse[0];
//                     }

//                     console.log(parsedResponse);

//                     // Update the state with parsed data
//                     setHotels(parsedResponse.Hotels || []);
//                     setItinerary(parsedResponse.Itinerary || []);
//                 } catch (error) {
//                     // console.error("Error generating travel plan:", error);
//                     alert("Error generating travel plan. Please try again later.");
//                 }

//                 setHotels(parsedResponse.Hotels || []);
//                 setItinerary(parsedResponse.Itinerary || []);
                
//                 // Save the trip data to Firebase
//                 SaveTrip(parsedResponse);

//                 setLoader(false);
//             }

//         };
//         generateTravelPlan();
//     }, [formData]);

//     useEffect(() => {
//         // Log updated state values after they are set
//         // console.log("Hotels:", hotels);
//         // console.log("Itinerary:", itinerary);
//     }, [hotels, itinerary]);

//     const SaveTrip = async(TripData) =>{
//         const user=JSON.parse(localStorage.getItem('user'));
//         const docId=Date.now().toString();

//         await setDoc(doc(db, 'Trips', docId), {
//             userSelection: formData,
//             tripData: TripData,
//             userEmail: user?.email,
//             id: docId
//         });
//     }


//     return (
//         <>

//             {loader ?(
//                 <div className="loading">
//                     <p>Loading your travel plan...</p>
//                     <img src={gif} alt="Loading animation" />
//                 </div> 
//             ) : (

//             <div className="travel-plan">
//                 <h1 className="plan-title"><span style={{fontSize:'18px'}}>Your Travel Plan for</span> <span style={{fontSize:'36px'}}>{formData.destination}✈️</span></h1>

//                 {/* Hotels Section */}
//                 <div className="hotels-section">
//                     <h2 className="plan-subtitles">Hotels</h2>

//                     <div className="hotels">
//                         {hotels.map((hotel, index) => (
//                             <div key={index} className="hotel-card">
//                                 <img src={hotelimg} alt={hotel.HotelName} style={{ maxWidth: '250px' }} />
//                                 <div className="hotel-card-content p-3">
//                                     <h3 style={{fontWeight:'600'}}>{hotel.HotelName}</h3>
//                                     <p style={{fontSize:'13px'}}>{hotel.Descriptions}</p>
//                                     <div className="hotel-card-footer">
//                                         <p><span style={{fontSize:'20px'}}>💵</span> ₹{hotel.HotelPrice}</p>
//                                         <p><span style={{color:'orange', fontSize:'20px'}}><FaStar /></span> {hotel.HotelRating}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                 </div>

//                 {/* Itinerary Section */}
//                 <div className="itinerary-section mt-5">
//                     <h2 className="plan-subtitles">Day-By-Day Plan</h2>

//                     {/* Group the itinerary data by days */}
//                     {Object.entries(
//                         itinerary.reduce((acc, place) => {
//                             acc[place.Day] = acc[place.Day] || [];
//                             acc[place.Day].push(place);
//                             return acc;
//                         }, {})
//                     ).map(([day, places], index) => (
//                         <div key={index} className={`mt-2 day-plan ${index % 2 === 0 ? "left" : "right"}`}>
//                             <h3>{`Day ${day}`}</h3>
//                             <p className="best-time">
//                                 Best Time to Visit: {places[0]?.BestTimeToVisit}
//                             </p>
//                             <div className="places">
//                                 {places.map((place, placeIndex) => (
//                                     <div key={placeIndex} className="place-card">
//                                         <h4 style={{fontWeight:'600'}}>{place.PlaceName}</h4>
//                                         <p style={{fontSize:'13px'}}>{place.PlaceDetails}</p>
//                                         <p><strong>Ticket Price:</strong> ₹{place.TicketPricing}</p>
//                                         <p><span style={{color:'orange', fontSize:'20px'}}><FaStar /></span> {place.PlaceRating}</p>
//                                         <p><strong>Travel Time:</strong> {place.TravelTime}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>


//             </div>

//             )}

//         </>
//     );
// }

// export default TravelPlan;

import React, { useEffect, useState } from "react";
import hotelimg from "../assets/images/Hotel.jpg";
import "../assets/css/TravelPlan.css";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

function TravelPlan() {
    const [hotels, setHotels] = useState([]);
    const [itinerary, setItinerary] = useState([]);
    const [loader, setLoader] = useState(true);
    const [destination,setDestination] = useState("");
    const { tripId } = useParams(); // Extract `id` from the URL

    // useEffect(() => {
    //     // Fetch travelPlans data from localStorage
    //     const travelPlans = localStorage.getItem("travelPlans");
    //     if (travelPlans) {  
    //         try {
    //             const parsedData = JSON.parse(travelPlans); // Parse the JSON string
    //             if (parsedData && parsedData.length > 0) {
    //                 const tripData = JSON.parse(parsedData[0]?.tripData || "{}"); // Parse `tripData` field
    //                 setHotels(tripData.Hotels || []);
    //                 setItinerary(tripData.Itinerary || []);
    //                 setDestination(tripData.Destination || "");
    //             }
    //         } catch (error) {
    //             console.error("Error parsing travelPlans data:", error);
    //         }
    //     }
    //     setLoader(false);
    // }, []);

    useEffect(() => {
        // Fetch travelPlans data from localStorage
        const travelPlans = localStorage.getItem("travelPlans");
        if (travelPlans) {
          try {
            const parsedData = JSON.parse(travelPlans); // Parse the JSON string
            if (parsedData && parsedData.length > 0) {
              // Find the specific trip data based on the id
              const specificTripData = parsedData.find((data) => data.id === tripId);
              //set destination
              setDestination(specificTripData?.userSelection?.destination || "");
    
              if (specificTripData) {
                const tripData = JSON.parse(specificTripData.tripData || "{}"); // Parse `tripData` field
                setHotels(tripData.Hotels || []);
                setItinerary(tripData.Itinerary || []);
                // setDestination(tripData.Destination || "");
              } else {
                console.error(`No trip data found for id: ${id}`);
              }
            }
          } catch (error) {
            console.error("Error parsing travelPlans data:", error);
          }
        }
        setLoader(false);
      }, [tripId]);

    if (loader) {
        return <div>Loading...</div>;
    }

    return (
        <div className="travel-plan">
            <h1 className="plan-title"><span style={{fontSize:'18px'}}>Your Travel Plan for</span> <span style={{fontSize:'36px'}}>{destination}✈️</span></h1>

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
                                    <p><span style={{fontSize:'20px'}}>💵</span> ${hotel.HotelPrice}</p>
                                    <p><span style={{color:'orange', fontSize:'20px'}}><FaStar /></span> {hotel.HotelRating}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Itinerary Section */}
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
                                    <p><strong>Ticket Price:</strong> ${place.TicketPricing}</p>
                                    <p><span style={{color:'orange', fontSize:'20px'}}><FaStar /></span> {place.PlaceRating}</p>
                                    <p><strong>Travel Time:</strong> {place.TravelTime}</p>
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