import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import home from '../../../images/home.jpg';

const Header = () => {
    return (
        <main className="header-container">
            <div className="row">
                <Navbar></Navbar>
            </div>
            <div className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1>All Digital Solutions</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, pariatur!</p>
                </div>
                <div className="col-md-7">
                    <img src={home} alt="" className="img-fluid"/>
                </div>
            </div>

        </main>
    );
};

export default Header;