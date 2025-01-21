// Card.jsx
import React from "react";

const Card = ({ id, image, title, travelType, price }) => {
    const handleBooking = (id, travelType) => {
        window.location.href = `/booking/${id}/${travelType}`; // Redirects to booking with id and travelType
    };

    return (
        <div className="col-md-4">
            <div className="card">
                <img className="card-img-top" src={image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="card-text">
                        <span>{travelType}</span>
                        <span>Price: Rs. {price}</span>
                    </div>
                    <button
                        onClick={() => handleBooking(id, travelType)}
                        className="btn btn-secondary"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
