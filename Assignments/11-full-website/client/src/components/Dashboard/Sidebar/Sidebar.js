import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <button className="btn-primary rounded">Dashboard</button>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <button className="btn-primary rounded">Home</button>
                    </Link>
                </li>
                {
                    isAdmin
                        ?
                        <div>
                            <li>
                                <Link to="/addService"><button className="btn-primary rounded">Add Service</button></Link>
                            </li>
                            <li>
                                <Link to="/manageService"><button className="btn-primary rounded">Manage Service</button></Link>
                            </li>
                            <li>
                                <Link to="/addPrice"><button className="btn-primary rounded">Add Price</button></Link>
                            </li>
                            <li>
                                <Link to="/managePrice"><button className="btn-primary rounded">Manage Prices</button></Link>
                            </li>
                            <li>
                                <Link to="/viewOrders"><button className="btn-primary rounded">View Orders</button></Link>
                            </li>
                            <li>
                                <Link to="/addAdmin"><button className="btn-primary rounded">Add Admin</button></Link>
                            </li>
                        </div>
                        :
                        <div>
                            <li>
                                <Link to="/addOrder"><button className="btn-primary rounded">Order</button></Link>
                            </li>
                            <li>
                                <Link to="/myOrders"><button className="btn-primary rounded">My Orders</button></Link>
                            </li>
                            <li>
                                <Link to="/addReview"><button className="btn-primary rounded">Add Review</button></Link>
                            </li>
                        </div>
                }




            </ul>
            <div>
                <h6>{loggedInUser.name}</h6>
                <Link to="/" className="text-white"> <button className="btn-danger">Logout</button></Link>
            </div>
        </div>
    );
};

export default Sidebar;