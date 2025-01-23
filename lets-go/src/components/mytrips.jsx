import React from 'react'
import Header from '../constants/header';
import Footer from '../constants/footer';
import mytrips from '../assets/images/mytrips.jpg'
import trip1 from '../assets/images/bg-image-1.jpg'
import { IoMdTime } from "react-icons/io";
import '../assets/css/mytrips.css';

function Mytrips() {

    return (
        <>
            <Header />
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
                    <div className="trip-card">
                        <div className="card-image">
                            <img src={trip1} alt="Trip" />
                        </div>

                        <div className="card-content">
                            <h3>
                                Paris Adventure <span style={{ fontSize: '15px' }}>Upcoming</span>
                            </h3>
                            <p>
                                <IoMdTime /> 25th Jan - 30th Jan 2025
                            </p>
                            <p>
                                <strong>Budget:</strong> $1500
                            </p>
                        </div>

                        <button className="details-button">View Details</button>
                    </div>

                    <div className="trip-card">
                        <div className="card-image">
                            <img src={trip1} alt="Trip" />
                        </div>

                        <div className="card-content">
                            <h3>
                                Paris Adventure <span style={{ fontSize: '15px' }}>Upcoming</span>
                            </h3>
                            <p>
                                <IoMdTime /> 25th Jan - 30th Jan 2025
                            </p>
                            <p>
                                <strong>Budget:</strong> $1500
                            </p>
                        </div>

                        <button className="details-button">View Details</button>
                    </div>

                    <div className="trip-card">
                        <div className="card-image">
                            <img src={trip1} alt="Trip" />
                        </div>

                        <div className="card-content">
                            <h3>
                                Paris Adventure <span style={{ fontSize: '15px' }}>Upcoming</span>
                            </h3>
                            <p>
                                <IoMdTime /> 25th Jan - 30th Jan 2025
                            </p>
                            <p>
                                <strong>Budget:</strong> $1500
                            </p>
                        </div>

                        <button className="details-button">View Details</button>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Mytrips;
