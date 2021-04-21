import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <h3 className="ms-5">AJ IT Farm</h3>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <a class="nav-link mr-5" href="#about"><Link to="/">Home</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5" href="#services">Our Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5" href="#review">Reviwes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5" href="#about"><Link to="/dashboard">Dashboard</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5" href="#about"><Link to="/login">Login</Link></a>
                        </li>
                        <li class="nav-item">
                            {isLoggedIn.name}
                        </li>
                    </ul>
                </div>
            </nav>


        </div>

    );

};

export default Navbar;