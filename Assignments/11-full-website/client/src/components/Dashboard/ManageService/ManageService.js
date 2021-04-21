import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [serviceList, setServiceList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServiceList(data))
    }, [])
    // console.log(serviceList);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteService/${id}`,{
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
                <h2 className="mt-5 ml-2">Manage Service</h2>
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
                            serviceList.map(service =>
                                <tr>
                                    <td>{service.title}</td>
                                    <td>{service.description}</td>
                                    <td>
                                        <button onClick={() => {handleDelete(service._id)}}>delete</button>
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

export default ManageService;