import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // console.log(services);
    return (
        <section id="services">
            <h3 className="text-center mt-5">Services</h3>
            <div className="row d-flex justify-content-center mt-4">
                    {
                        services.map(service =>
                            <div className="col-md-3">
                                <Service service={service}></Service>
                            </div>
                        )
                    }
            </div>
        </section>
    );
};

export default Services;