import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageOrders = () => {
    const [orderList, setOrderList] = useState([]);
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, []);
    // console.log(serviceList);
    const handleUpdate = (id, newStatus) => {
        fetch(`http://localhost:5000/getOrder/${id}`)
        .then (res => res.json())
        .then(data => {
            setOrders(data);
        })

        fetch(`http://localhost:5000/updateOrder/${id}?status=${newStatus}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
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
                <h2 className="mt-5 ml-2">All Orders</h2>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary text-left" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email</th>
                            <th className="text-secondary" scope="col">Phone</th>
                            <th className="text-secondary" scope="col">Service</th>
                            <th className="text-secondary" scope="col">Price</th>
                            <th className="text-secondary" scope="col">Status</th>
                            <th className="text-secondary" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderList.map(order =>
                                <tr>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.service}</td>
                                    <td>{order.packages}</td>
                                    <td>{order.status}</td>
                                    <td>
                                        <button onClick={() => { handleUpdate(order._id,"On Going") }}>On Going</button>
                                        <button onClick={() => { handleUpdate(order._id,"Done") }}>Done</button>
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

export default ManageOrders;