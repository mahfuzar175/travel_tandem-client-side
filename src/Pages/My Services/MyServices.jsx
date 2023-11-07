import { useState } from "react";
import { Helmet } from "react-helmet-async";
import MyServiceCard from "./MyServiceCard";
import { useLoaderData } from "react-router-dom";

const MyServices = () => {

  const loadedservices = useLoaderData();

  const [services, setServices] = useState(loadedservices)


  return (
    <div className="flex flex-col items-center pt-4 bg-gray-50">
      <Helmet>
        <title>Travel Tandem | My Services</title>
      </Helmet>
      <div className="text-center mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {
            services.map(service => <MyServiceCard  key={service._id} 
              service={service}
              services={services}
              setServices={setServices}
              ></MyServiceCard>)
          } 
        </div>
      </div>
    </div>
  );
};

export default MyServices;
