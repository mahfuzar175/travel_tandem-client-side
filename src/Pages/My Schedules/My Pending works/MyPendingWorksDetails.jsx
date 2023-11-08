import React, { useState } from "react";
import Swal from "sweetalert2";

const MyPendingWorksDetails = ({ booking, bookings, setBookings }) => {
  const [serviceStatus, setServiceStatus] = useState("Pending");

  const {
    _id,
    serviceName,
    serviceImage,
    serviceProviderName,
    serviceProviderEmail,
    servicePrice,
  } = booking;

  const addToPendingItems = {
    serviceName,
    serviceImage,
    serviceProviderName,
    serviceProviderEmail,
    servicePrice,
    serviceStatus, // Add serviceStatus to the object being sent to the server
  };

  const updateServiceStatus = (status) => {
    const updatedBooking = { ...booking, serviceStatus: status };

    // fetch(`https://b8a11-server-side-mahfuzar175.vercel.app/update-status/${_id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(updatedBooking),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data); // Handle the response data as needed
    //     // Update the state or re-fetch the updated bookings list if necessary
    //   })
    //   .catch((error) => {
    //     console.error("Error updating service status:", error);
    //   });
  };

  const handlePending = () => {
    fetch("https://b8a11-server-side-mahfuzar175.vercel.app/pending", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToPendingItems),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Successfully Done",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-md border">
        <figure className="w-[250px] h-[250px]">
          <img className="w-[400px] h-[450px]" src={serviceImage} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{serviceName}</h2>
          <p className="font-semibold text-gray-400">{serviceProviderName}</p>
          <p className="font-semibold text-gray-400">{serviceProviderEmail}</p>
          <p className="font-bold text-lg text-red-600">
            Price: $ {servicePrice}
          </p>
          <div className="card-actions justify-between">
            <select
              value={serviceStatus}
              onChange={(e) => {
                const selectedStatus = e.target.value;
                setServiceStatus(selectedStatus);
                updateServiceStatus(selectedStatus);
              }}
              className="p-2 rounded-box border bg-gray-600 text-white font-medium"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>

            <button
              onClick={() => handlePending()}
              className="btn bg-green-600 hover:bg-green-700 text-white"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPendingWorksDetails;
