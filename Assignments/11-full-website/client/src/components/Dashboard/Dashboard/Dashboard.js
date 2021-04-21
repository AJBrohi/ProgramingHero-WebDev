import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);
    console.log(isLoggedIn);
    return (
        <section>
            <div className="row">
                <div className='col-md-2'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-md-10 d-flex flex-column justify-content-center align-items-center mt-5'>
                    <img src={isLoggedIn.photo} alt="" className="rounded-circle"/>
                    <h2 className="mt-3">Welcome {isLoggedIn.name}</h2>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;