import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import MyServiceCard from "./MyServiceCard";

const MyServices = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);


  return (
    <div className="flex flex-col items-center pt-4 bg-gray-50">
      <Helmet>
        <title>Travel Tandem | Services</title>
      </Helmet>
      <div className="text-center mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {
            services.map(service => <MyServiceCard  key={service._id} service={service}></MyServiceCard>)
          } 
        </div>
      </div>
    </div>
  );
};

export default MyServices;
