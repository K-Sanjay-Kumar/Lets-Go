import React from "react";
import { FaRegUser } from "react-icons/fa";

const Card = ({ id, image, title, travelType, price, guests }) => {
    const handleBooking = (id, travelType) => {
        window.location.href = `/booking/${id}/${title}/${travelType}/${price}`; // Redirects to booking with id, travelType, and price
    };

    return (
        <div className="col-md-4">
            <div className="card">
                <img className="card-img-top" src={image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="card-text">
                        <span>
                            <FaRegUser /> {guests} guests <span className="travel-type">({travelType})</span>
                        </span>
                    </div>

                    <div
                        className="card_footer mt-4"
                        style={{ display: "flex", justifyContent: "space-between" }}
                    >
                        <p>
                            <b style={{ fontSize: "20px" }}>Rs. {price}</b>{" "}
                            <span style={{ color: "grey" }}>/Person</span>{" "}
                        </p>
                        <button
                            onClick={() => handleBooking(id, travelType)} // Pass travelType as a string
                            className="btn btn-secondary"
                            style={{ borderRadius: "25px" }}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
