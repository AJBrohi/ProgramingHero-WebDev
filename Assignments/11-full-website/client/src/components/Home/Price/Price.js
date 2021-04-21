import React from 'react';

const Price = ({price}) => {
    return (
        <div className="card">
            <div className="card-body d-flex flex-column justify-content-center">
                <h3 className="card-title text-center mt-5">{price.title}</h3>
                <p className="card-text mt-5 text-center">{price.description}</p>
                <h2 className="text-center mt-5">${price.price}</h2>
            </div>
        </div>
    );
};

export default Price;