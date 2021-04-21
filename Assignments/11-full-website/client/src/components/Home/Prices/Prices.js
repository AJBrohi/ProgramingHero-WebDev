import React, { useEffect, useState } from 'react';
import Price from '../Price/Price';

const Prices = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/prices')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    // console.log(prices);
    return (
        <section>
            <h3 className="text-center mt-5">Package Pricing</h3>
            <div className="row d-flex justify-content-center mt-4">
                    {
                        prices.map(price =>
                            <div className="col-md-3">
                                <Price price={price}></Price>
                            </div>
                        )
                    }
            </div>
        </section>
    );
};

export default Prices;