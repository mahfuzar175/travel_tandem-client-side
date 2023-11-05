import { useEffect, useState } from "react";

const PopularServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="text-center mt-12">
            <h1 className="font-bold text-3xl">Popular Services</h1>
        </div>
    );
};

export default PopularServices;