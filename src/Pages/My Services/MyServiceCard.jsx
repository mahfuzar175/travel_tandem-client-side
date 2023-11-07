import { data } from "autoprefixer";
import Swal from "sweetalert2";

const MyServiceCard = ({ service, services, setServices }) => {
    const {_id, serviceName, serviceDescription, serviceImage, serviceProviderName, serviceProviderImage, servicePrice,serviceArea} = service;

    const handleDelete = _id =>{
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
          fetch(`http://localhost:5000/services/${_id}`, {
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
              const remaining = services.filter(serv => serv._id !== _id);
              setServices(remaining);
            }
          })

        }
      });
    }



    return (
        <div className="flex flex-col mt-4 max-w-lg p-6 space-y-6 overflow-hidden rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
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
            <h2 className="mb-1 text-xl font-bold text-left">{serviceName}</h2>
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
        <div className="flex justify-center gap-4">
        <button className="btn bg-green-600 hover:bg-green-700 w-1/2 text-white">Update</button>
        <button onClick={() => handleDelete(_id)} className="btn bg-red-600 hover:bg-red-700 w-1/2 text-white">Delete</button>
        </div>
    </div>
    );
};

export default MyServiceCard;