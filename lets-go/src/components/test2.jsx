
import React, { useContext, useEffect, useState } from "react";
import { FormDataContext } from "./FormDataContext";
import { chatSession } from "../service/AIgenerate";
import Header from "../constants/header";
import Footer from "../constants/footer";

function TravelPlan() {
  const { formData } = useContext(FormDataContext);
  const [loading, setLoading] = useState(true); // State for loading
  const [responseData, setResponseData] = useState(null); // State for response data

  useEffect(() => {
    const generateTravelPlan = async () => {
      if (formData) {
        // setLoading(true); // Start loading
        const PROMPT = `Generate Travel Plan for Location: ${formData.destination}, for ${formData.noOfDays} Days for ${formData.traveler} with a ${formData.budget} Budget, give me Hotels options list Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for ${formData.noOfDays} days with each day plan with best time to visit in JSON format.`;
        console.log(PROMPT);

        try {
        //   const result = await chatSession.sendMessage(PROMPT);
          const response = await result.response.text(); // Ensure the response is parsed correctly
          setResponseData(JSON.parse(response)); // Parse and store the JSON response
        } catch (error) {
          console.error("Error generating travel plan:", error);
        } finally {
        //   setLoading(false); // Stop loading after the request completes
        }
      }
    };

    generateTravelPlan();
  }, [formData]);

  if (loading) {
    return <h1>Loading travel plan...</h1>; // Display loading indicator
  }

  if (!responseData) {
    return <h1>Failed to load travel plan. Please try again later.</h1>; // Handle errors
  }

  return (
    <>
        <Header />

        <Footer />
    </>
  );
}

export default TravelPlan;













// import React, { useContext, useEffect, useState } from "react";
// import { FormDataContext } from "./FormDataContext";
// import { chatSession } from "../service/AIgenerate";
// import '../assets/css/TravelPlan.css'

// function TravelPlan() {
//   const { formData } = useContext(FormDataContext);
//   const [loading, setLoading] = useState(true);
//   const [tripData, setTripData] = useState(null);

//   useEffect(() => {
//     const generateTravelPlan = async () => {
//       if (formData) {
//         const PROMPT = `Generate Travel Plan for Location: ${formData.destination}, for ${formData.noOfDays} Days for ${formData.traveler} with a ${formData.budget} Budget, give me Hotels options list Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for ${formData.noOfDays} days with each day plan with best time to visit in JSON format.`;
//         console.log(PROMPT);
//         const result = await chatSession.sendMessage(PROMPT);
//         const response = await result.response.text();
//         console.log("Response:", response);
//         setTripData(JSON.parse(response));
//         setLoading(false);
//       }
//     };
//     generateTravelPlan();
//   }, [formData]);

//   if (loading) {
//     return <div className="loading">Loading your travel plan...</div>;
//   }

//   return (
//     <div className="travel-plan">
//       <h1>Your Travel Plan for {formData.destination}</h1>
//       {Object.keys(tripData[0]?.itinerary || {}).map((day, index) => (
//         <div key={day} className={`day-plan ${index % 2 === 0 ? "left" : "right"}`}>
//           <h2>{day.toUpperCase()}</h2>
//           <p className="best-time">Best Time to Visit: {tripData[0].itinerary[day].best_time_to_visit}</p>
//           <div className="places">
//             {tripData[0].itinerary[day].places.map((place, idx) => (
//               <div key={idx} className="place-card">
//                 <h3>{place.placeName}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default TravelPlan;


import React, { useContext, useEffect, useState } from "react";
import { FormDataContext } from "./FormDataContext";
import { chatSession } from "../service/AIgenerate";
import "../assets/css/TravelPlan.css";

function TravelPlan() {
  const { formData } = useContext(FormDataContext);
  const [loading, setLoading] = useState(true);
  const [tripData, setTripData] = useState(null);

  async function fetchImageFromUnsplash(query) {
    const accessKey = "YOUR_UNSPLASH_ACCESS_KEY";
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${accessKey}&per_page=1`
    );
    const data = await response.json();
    // Return the first image URL or a placeholder if no image is found
    return data.results.length > 0 ? data.results[0].urls.small : "Image Not Available";
  }
  

//   useEffect(() => {
//     const generateTravelPlan = async () => {
//       if (formData) {
//         const PROMPT = `Generate Travel Plan for Location: ${formData.destination}, for ${formData.noOfDays} Days for ${formData.traveler} with a ${formData.budget} Budget, give me Hotels options list Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for ${formData.noOfDays} days with each day plan with best time to visit in JSON format. And use actual image URLs for each entry. If the correct image URL isn't known, mark it as "Image Not Available."`;
//         console.log(PROMPT);
//         const result = await chatSession.sendMessage(PROMPT);
//         const response = await result.response.text();
//         console.log("Response:", response);
//         setTripData(JSON.parse(response));
//         setLoading(false);
//       }
//     };
//     generateTravelPlan();
//   }, [formData]);

useEffect(() => {
    const generateTravelPlan = async () => {
      if (formData) {
        const PROMPT = `Generate Travel Plan for Location: ${formData.destination}, for ${formData.noOfDays} Days for ${formData.traveler} with a ${formData.budget} Budget, give me Hotels options list Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for ${formData.noOfDays} days with each day plan with best time to visit in JSON format. And use actual image URLs for each entry. If the correct image URL isn't known, mark it as "Image Not Available."`;
        console.log(PROMPT);
        const result = await chatSession.sendMessage(PROMPT);
        const response = await result.response.text();
        console.log("Response:", response);
        setTripData(JSON.parse(response));

        console.log("Trip Data1:", tripData);
  
        // // Fetch Unsplash images for hotels
        // for (const hotel of tripData.hotels) {
        //   const imageUrl = await fetchImageFromUnsplash(hotel.HotelName);
        //   hotel["hotel image url"] = imageUrl;
        // }
  
        // // Fetch Unsplash images for itinerary places
        // for (const day of tripData.itinerary.days) {
        //   for (const place of day.places) {
        //     const imageUrl = await fetchImageFromUnsplash(place.placeName);
        //     place["Place Image Url"] = imageUrl;
        //   }
        // }

    const hotelsArray = Array.isArray(tripData.hotels) ? tripData.hotels : (typeof tripData.hotels === 'object' ? Object.values(tripData.hotels) : []);


      for (const hotel of hotelsArray) {
        const imageUrl = await fetchImageFromUnsplash(hotel.HotelName);
        hotel["hotel image url"] = imageUrl;
      }

      // Fetch Unsplash images for itinerary places
    //   for (const day of tripData.itinerary.days) {
    //     for (const place of day.places) {
    //       const imageUrl = await fetchImageFromUnsplash(place.placeName);
    //       place["Place Image Url"] = imageUrl;
    //     }
    //   }

      for (const day of tripData.itinerary?.days || []) {
        for (const place of day.places || []) {
          if (place && place.placeName) {
            try {
              const imageUrl = await fetchImageFromUnsplash(place.placeName);
              place["Place Image Url"] = imageUrl;
            } catch (error) {
              console.error(`Failed to fetch image for place: ${place.placeName}`, error);
              place["Place Image Url"] = "Image Not Available"; // Fallback in case of error
            }
          }
        }
      }
      

        console.log("Trip Data2:", tripData);
  
        setTripData(tripData);
        setLoading(false);
      }
    };
  
    generateTravelPlan();
  }, [formData]);
  

  if (loading) {
    return <div className="loading">Loading your travel plan...</div>;
  }

  return (
    <div className="travel-plan">
      <h1>Your Travel Plan for {formData.destination}</h1>

      {/* Hotels Section */}
      <div className="hotels-section">
        <h2>Hotels</h2>
        {tripData?.hotels?.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <img src={hotel["hotel image url"]} alt={hotel.HotelName} />
            <h3>{hotel.HotelName}</h3>
            <p>{hotel.descriptions}</p>
            <p>Price: ₹{hotel.Price}</p>
            <p>Rating: {hotel.rating}</p>
          </div>
        ))}
      </div>

      {/* Itinerary Section */}
      <div className="itinerary-section">
        <h2>Itinerary</h2>
        {tripData?.itinerary?.days.map((day, index) => (
          <div key={index} className="day-plan">
            <h3>Day {day.day}</h3>
            <p>Best Time to Visit: {day["best time to visit"]}</p>
            <div className="places">
              {day.places.map((place, idx) => (
                <div key={idx} className="place-card">
                  <img src={place["Place Image Url"]} alt={place.placeName} />
                  <h4>{place.placeName}</h4>
                  <p>{place["Place Details"]}</p>
                  <p>Ticket Price: {place["ticket Pricing"]}</p>
                  <p>Rating: {place.rating}</p>
                  <p>Travel Time: {place["T ime to travel"]}</p>
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

