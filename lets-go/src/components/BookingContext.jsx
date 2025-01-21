// import React, { createContext, useState, useContext } from "react";

// const BookingContext = createContext();

// export const BookingProvider = ({ children }) => {
//     const [bookingDetails, setBookingDetails] = useState(null);

//     return (
//         <BookingContext.Provider value={{ bookingDetails, setBookingDetails }}>
//             {children}
//         </BookingContext.Provider>
//     );
// };

// export const useBooking = () => useContext(BookingContext);


import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState({});

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
