import { Helmet } from "react-helmet-async";
import MyBookings from "../../components/MyBookings";
import MyPendingWorks from "../../components/MyPendingWorks";

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
