import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // console.log(service);
    return (
        <div className="card">
            <img src={service.imgUrl} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">{service.title}</h5>
                <p className="card-text text-center">{service.description}</p>
                <button className="btn btn-secondary">
                    <Link to = '/addOrder'>Order Here</Link>
                </button>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    );
};

export default Service;