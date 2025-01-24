import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { db } from '../service/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import mytrips from '../assets/images/mytrips.jpg';
import TripCard from '../assets/images/TripCard.jpg';
import { IoMdTime } from "react-icons/io";
import '../assets/css/mytrips.css';

function Mytrips() {
    const [trips, setTrips] = useState([]); // State to store trips

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user')); // Get logged-in user
                const querySnapshot = await getDocs(collection(db, 'Trips'));

                // Filter trips based on user email
                const userTrips = querySnapshot.docs
                    .map(doc => doc.data())
                    .filter(trip => trip.userEmail === user?.email);

                setTrips(userTrips); // Update state with user trips
            } catch (error) {
                console.error("Error fetching trips:", error);
            }
        };

        fetchTrips();
    }, []);

    return (
        <>
            <div className="banner" style={{ backgroundImage: `url(${mytrips})` }}>
                <div className="banner-content">
                    <div className="content-left">
                        <h1 style={{ fontSize: '82px', color: '#ff0000f5' }}>My Trips</h1>
                        <p style={{ fontSize: '25px', color: '#ffffff' }}>Explore your upcoming and past trips with ease.</p>
                    </div>
                </div>
            </div>

            <div className="mytrips-orders mt-5">
                <div className="container">
                    {trips.length > 0 ? (
                        trips.map((trip, index) => (
                            <div className="trip-card" key={index}>
                                <div className="card-image">
                                    <img src={TripCard} alt="Trip" />
                                </div>

                                <div className="card-content">
                                    <h3 className='trip-card-title'>
                                        <span style={{ fontSize: '15px' }}>Planned your trip to: </span>
                                        <span style={{ fontSize: '26px' }}>{trip.userSelection.destination}🧳</span>
                                    </h3>
                                    <p>
                                        <IoMdTime style={{ fontSize: '20px' }} /> {trip.userSelection.noOfDays} days
                                    </p>
                                    <p>
                                        <strong>Budget:</strong> {trip.userSelection.budget}
                                    </p>
                                </div>

                                <button className="details-button"><Link to={`/travel-plan/${trip.id}`} style={{color:'white'}}>View Details</Link></button>
                            </div>
                        ))
                    ) : (
                        <p className='text-center'>No trips found. Plan a new trip to get started!</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Mytrips;
