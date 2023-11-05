const ServiceCard = ({ service }) => {
  const {
    serviceName,
    serviceDescription,
    serviceImage,
    serviceProviderName,
    serviceProviderImage,
    servicePrice,
  } = service;

  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
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
            <p className="text-sm font-normal dark:text-gray-400">{serviceDescription}</p>
          </div>
          <div>
            <button className="p-4 border rounded-lg text-base font-bold text-red-600">Price: ${servicePrice}</button>
          </div>
        </div>
      </div>
      <button className="btn btn-primary">View Details</button>
    </div>
  );
};

export default ServiceCard;
