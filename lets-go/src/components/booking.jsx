import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from "react-router-dom";
import Header from '../constants/header';
import Footer from '../constants/footer';
import './booking.css';

function Booking() {
    const { id, travelType, price, destination } = useParams();
    const [members, setMembers] = useState(0); // State to handle number of members

    useEffect(() => {
        if (travelType === 'Familly') {
            setMembers(5);
        } else if (travelType === 'Friends') {
            setMembers(3);
        } else if (travelType === 'Couple') {
            setMembers(2);
        } else {
            setMembers(1);
        }
    }, []);    

    // Render member input fields
    const renderMemberInputs = () => {
        let inputs = [];
        for (let i = 1; i <= members; i++) {
            inputs.push(
                <div className="member-input" key={i}>
                    <input type="text" name={`member_${i}_name`} placeholder={`Member ${i} Name`} required />
                </div>
            );
        }
        return inputs;
    };

    const addMember = () => {
        setMembers(members + 1);
    };

    return (
        <>
            <Header />
            <div className="booking-form">
                <div className="container">
                    <div className="form">
                        <div className="form-title">
                            <h3>✈️ Book Your Trip to: {destination} ✈️</h3>
                        </div>
                        <div className="form-content">
                            <form action="" method="post">
                                <input type="text" name="name" placeholder="Full Name" required />
                                <input type="email" name="email" placeholder="Email Address" required />
                                <input type="tel" name="mobile" placeholder="Mobile Number" required />
                                <label>
                                    Start Date:
                                    <input type="date" name="start_date" required />
                                </label>
                                <label>
                                    End Date:
                                    <input type="date" name="end_date" required />
                                </label>
                                {renderMemberInputs()}
                                <button type="button" onClick={addMember} className="btn-add-member">
                                    Add Member
                                </button>
                                <button type="submit" className="btn-submit">
                                    Book Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Booking;
