import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManagePrices = () => {
    const [priceList, setPriceList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/prices')
            .then(res => res.json())
            .then(data => setPriceList(data))
    }, []);
    // console.log(serviceList);
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deletePrice/${id}`,{
            method: 'DELETE'
        })
        .then (res => res.json())
        .then(data => {
            alert("Refresh to see changes");
        })
    }

    return (
        <section className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-4 pr-5">
                <h2 className="mt-5 ml-2">Manage Price</h2>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary text-left" scope="col">Title</th>
                            <th className="text-secondary" scope="col">Description</th>
                            <th className="text-secondary" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            priceList.map(price =>
                                <tr>
                                    <td>{price.title}</td>
                                    <td>{price.description}</td>
                                    <td>
                                        <button onClick={() => {handleDelete(price._id)}}>delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManagePrices;