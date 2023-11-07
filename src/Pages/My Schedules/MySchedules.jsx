import React from 'react';
import MyBookings from './My Bookings/MyBookings';
import MyPendingWorks from './My Pending works/MyPendingWorks';
import { useLoaderData } from 'react-router-dom';

const MySchedules = () => {
    

    return (
        <div>

            <MyBookings></MyBookings>
            <MyPendingWorks></MyPendingWorks>
        </div>
    );
};

export default MySchedules;