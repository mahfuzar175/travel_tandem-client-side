import { useContext, useState} from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const ServiceDetails = () => {

  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const data = useLoaderData();
  const {
    _id,
    serviceName,
    serviceDescription,
    serviceImage,
    serviceProviderName,
    serviceProviderImage,
    serviceProviderEmail,
    servicePrice,
    serviceArea,
  } = data;
  

  const addToCartItems = {
    serviceName,
    serviceImage,
    serviceProviderName,
    serviceProviderEmail,
    servicePrice,
    
  };

    const handlePurchase = () =>{

      
      fetch('https://b8a11-server-side-mahfuzar175.vercel.app/booking', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(addToCartItems) 
      })
      .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Successfully Purchase',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    })
    }

  const [serviceTakingDate, setServiceTakingDate] = useState("");
  const [specialInstruction, setSpecialInstruction] = useState("");


  return (
    <div className="flex justify-center items-center h-screen p-4 md:mb-12 md:mt-8">
      <Helmet>
        <title>Travel Tandem | Details</title>
      </Helmet>
      <div className="flex flex-col p-6 w-[600px] md:w-[1000px] space-y-6 overflow-hidden rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex space-x-4">
          <img
            alt=""
            src={serviceProviderImage}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {serviceProviderName}
            </a>
            <span className="text-xs dark:text-gray-400">Provider</span>
          </div>
        </div>
        <div>
          <img
            src={serviceImage}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="flex justify-between items-center">
            <div>
              <h2 className="mb-1 text-xl font-bold text-left">
                {serviceName}
              </h2>
              <p className="text-sm font-normal dark:text-gray-400">
                {serviceDescription}
              </p>
              <p className="font-semibold text-left">Area: {serviceArea}</p>
            </div>
            <div>
              <button className="p-4 border rounded-lg text-base font-bold text-red-600">
                Price: ${servicePrice}
              </button>
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn btn-primary w-full"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Book Now
          </button>
        
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-2xl bg-green-500 text-center rounded-md border p-2 mb-4">Booking Service</h3>
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700">
                  Service Name
                </label>
                <p className="p-1 rounded border">{serviceName}</p>
                
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700">
                  Service Image
                </label>
                <img src={serviceImage} alt="" className=" w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700">
                  Service Provider Email
                </label>
                <p className="border p-1 rounded">{serviceProviderEmail}</p>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700">
                  User Email
                </label>
                <p className="border p-1 rounded">{user.email}</p>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700">
                  Service Taking Date
                </label>
                <input
                  type="date"
                  value={serviceTakingDate}
                  onChange={(e) => setServiceTakingDate(e.target.value)}
                  className="mt-1 p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700">
                  Special Instruction
                </label>
                <textarea
                  value={specialInstruction}
                  onChange={(e) => setSpecialInstruction(e.target.value)}
                  className="mt-1 p-2 border rounded w-full"
                  rows="4"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block p-2 border rounded-lg text-lg font-bold text-red-600">
                  Price: ${servicePrice}
                </label>
              </div>
              <div className="modal-action flex justify-center items-center">
                <button
                  onClick={() => {
                    handlePurchase();
                    document.getElementById("my_modal_1").close();
                  }}
                  className="btn btn-primary"
                >
                  Purchase this Service
                </button>
                <button
                  onClick={() => document.getElementById("my_modal_1").close()}
                  className="btn btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
