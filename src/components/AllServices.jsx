import React, { useEffect, useState } from "react";
import AllServicesCard from "./AllServicesCard";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
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

  return (
    <div className="flex flex-col items-center pt-4 bg-gray-50">
        <h1 className="font-bold text-3xl mb-2">All Services</h1>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {searchResults.map((service) => (
            <AllServicesCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
