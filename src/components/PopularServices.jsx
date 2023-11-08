import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ServiceCard from "./serviceCard";

const PopularServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('https://b8a11-server-side-mahfuzar175.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    const renderedServices = services.slice(0, 4);

    return (
        <div className="flex justify-center items-center">
            <div className="text-center mt-12">
                <h1 className="font-extrabold text-4xl mb-4">Popular <span className="text-pink-500">Services</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {renderedServices.map(service => (
                        <ServiceCard key={service._id} service={service} />
                    ))}
                </div>
                <Link to="/allServices">
                    <button className="btn btn-primary mt-4">Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default PopularServices;
