import React, { useEffect, useState } from "react";
import AllServicesCard from "./AllServicesCard";
import { Helmet } from "react-helmet-async";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedServices, setDisplayedServices] = useState(6); // Number of services to display initially

  useEffect(() => {
    fetch("https://b8a11-server-side-mahfuzar175.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setSearchResults(data);
      });
  }, []);

  const handleSearch = () => {
    const filteredServices = services.filter((service) =>
      service.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredServices);
  };

  const handleShowMore = () => {
    // Set displayed services to total number of services when "More" button is clicked
    setDisplayedServices(services.length);
  };

  return (
    <div className="flex flex-col items-center pt-4 bg-gray-50">
      <Helmet>
        <title>Travel Tandem | Services</title>
      </Helmet>
      <h1 className="font-extrabold text-4xl mb-2">
        All <span className="text-pink-500">Services</span>
      </h1>
      <div className="mt-8 mb-8 flex">
        <input
          type="text"
          placeholder="Search by service name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-l-md"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
        >
          Search
        </button>
      </div>
      <div className="text-center mb-20">
        <div className="grid grid-cols-1 gap-4">
          {searchResults.slice(0, displayedServices).map((service) => (
            <AllServicesCard key={service._id} service={service} />
          ))}
        </div>
        {services.length > displayedServices && (
          <button
            onClick={handleShowMore}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
          >
            See More...
          </button>
        )}
      </div>
    </div>
  );
};

export default AllServices;
