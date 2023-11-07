import React from "react";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import MyBookingDetails from "./MyBookingDetails";

const MyBookings = () => {
  const loadedBookings = useLoaderData();
  const [bookings, setBookings] = useState(loadedBookings);

  return (
    <div className="max-w-6xl p-4 mx-auto mb-8">
      <h2 className="font-bold text-center text-3xl mb-4">
        My <span className="text-pink-500">Bookings</span>
      </h2>
      {bookings.length === 0 ? (
        <p className="text-center font-semibold p-4 border rounded-md text-gray-400">
          No bookings available at the moment!!!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookings.map((booking) => (
            <MyBookingDetails
              key={booking._id}
              booking={booking}
              bookings={bookings}
              setBookings={setBookings}
            ></MyBookingDetails>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
