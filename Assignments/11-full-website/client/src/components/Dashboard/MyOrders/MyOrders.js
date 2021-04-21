import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const MyOrders = () => {
    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);
    const [orderList, setOrderList] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${isLoggedIn.email}`)
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])
    console.log(orderList);
    return (
        <section>
            <div className="row">
                <div className='col-md-2'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-md-10 mt-5 p-4 pe-5'>
                <h2 className="mt-5 ml-2">My Orders</h2>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary text-left" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email</th>
                            <th className="text-secondary" scope="col">Phone</th>
                            <th className="text-secondary" scope="col">Service</th>
                            <th className="text-secondary" scope="col">Price</th>
                            <th className="text-secondary" scope="col">Status</th>
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
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </section>
    );
};

export default MyOrders;