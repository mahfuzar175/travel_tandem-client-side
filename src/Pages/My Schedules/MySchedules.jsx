import React from "react";
import MyBookings from "./My Bookings/MyBookings";
import MyPendingWorks from "./My Pending works/MyPendingWorks";
import { Helmet } from "react-helmet-async";

const MySchedules = () => {
  return (
    <div>
      <Helmet>
        <title>Travel Tandem | My Schedules</title>
      </Helmet>

      <MyBookings></MyBookings>
      <MyPendingWorks></MyPendingWorks>
    </div>
  );
};

export default MySchedules;
