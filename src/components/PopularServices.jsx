import { useEffect, useState } from "react";
import ServiceCard from "./serviceCard";

const PopularServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="flex justify-center items-center">
            <div className="text-center mt-12">
            <h1 className="font-bold text-3xl mb-4">Popular Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                {
                    services.map(service => <ServiceCard 
                        key={service._id}
                        service={service}
                        ></ServiceCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default PopularServices;