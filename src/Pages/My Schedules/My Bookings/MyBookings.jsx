import { useLoaderData } from "react-router-dom";
import MyBookingDetails from "./MyBookingDetails";
import { useState } from "react";


const MyBookings = () => {
    const loadedBookings = useLoaderData();
    const [bookings, setBookings] = useState(loadedBookings);


    return (
        <div className='max-w-6xl p-4 mx-auto mb-8'>
            <h2 className="font-bold text-center text-2xl mb-4">My Bookings</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {
                bookings?.map(booking => <MyBookingDetails
                key={booking._id}
                booking={booking}
                bookings={bookings}
                setBookings={setBookings}
                ></MyBookingDetails>)
            }
            </div>
        </div>
    );
};

export default MyBookings;
