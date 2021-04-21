import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Prices from '../Prices/Prices';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Header></Header>
            <Services></Services>
            <Prices></Prices>
            <AboutUs></AboutUs>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;