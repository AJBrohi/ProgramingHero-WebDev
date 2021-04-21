import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer mt-5">
            <div className="row d-flex flex-col justify-content-center text-center text-white">
                <div className="col-md-3">
                    <h4>Address</h4>
                    <>Mirpur, Dhaka, Bangladesh</>
                </div>
                <div className="col-md-3">
                    <h4>Company</h4>
                    <p>About</p>
                    <p>Project</p>
                    <p>Our Team</p>
                    <p>Terms Conditions</p>
                    <p>Submit Listing</p>
                </div>
                <div className="col-md-3">
                    <h4>Quick Links</h4>
                    <p>About</p>
                    <p>Project</p>
                    <p>Our Team</p>
                    <p>Terms Conditions</p>
                    <p>Submit Listing</p>
                </div>
                <div className="col-md-3">
                    <h4>Company</h4>
                    <p>About</p>
                    <p>Project</p>
                    <p>Our Team</p>
                    <p>Terms Conditions</p>
                    <p>Submit Listing</p></div>
            </div>
        </section>
    );
};

export default Footer;