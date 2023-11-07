import React from "react";
import Swal from "sweetalert2";

const MyBookingDetails = ({booking, bookings, setBookings}) => {
    const { _id, serviceName, serviceImage, serviceProviderName, serviceProviderEmail, servicePrice } = booking;

    const handleBookingDelete = _id =>{
      console.log(_id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/booking/${_id}`, {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
              Swal.fire({
                title: "Deleted!",
                text: "Your service has been deleted.",
                icon: "success"
              });
              const remaining = bookings.filter(book => book._id !== _id);
              setBookings(remaining);
            }
          })

        }
      });

      
    }

    return (
        <div>
      <div className="card card-side bg-base-100 shadow-md border">
        <figure className="w-[250px] h-[250px] ">
          <img className="w-[400px] h-[450px]"
            src={serviceImage}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{serviceName}</h2>
          <p className="font-semibold text-gray-400">{serviceProviderName}</p>
          <p className="font-semibold text-gray-400">{serviceProviderEmail}</p>
          <p className="font-bold text-lg text-red-600">Price: $ {servicePrice}</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleBookingDelete(_id)} className="btn bg-red-600 hover:bg-red-700 text-white">Delete</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MyBookingDetails;
