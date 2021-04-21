import React, { useRef, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const [review, setReview] = useState({});

    const nameRef = useRef();
    const designationRef = useRef();
    const companyRef = useRef();
    const reviewRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const designation = event.target.designation.value;
        const company = event.target.company.value;
        const reviews = event.target.reviews.value;

        const reviewDetails = {
            name,
            designation,
            company,
            reviews
        }
        // console.log(adminDetails);
        setReview(reviewDetails);
        fetch('http://localhost:5000/addReview', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                nameRef.current.value = null;
                designationRef.current.value = null;
                companyRef.current.value = null;
                reviewRef.current.value = null;
                alert("Thank you for your review");
            })
            .catch(err => console.log(err))
    };

    return (
        <section className="container-fluid row">
            <div className="col-md-2"><Sidebar></Sidebar></div>
            <div className="col-md-10 p-4 pr-5">
                <h4 className="mt-5 ml-2">Add a Review</h4>
                <div className="input-form p-3">
                    <form onSubmit={handleSubmit} className="card shadow py-3 px-4" id="useForm">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label>Name</label>
                                <input ref={nameRef} type="text" className="form-control" placeholder="Enter Your Name" name="name" required />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Designation</label>
                                <input ref={designationRef} type="text" className="form-control" placeholder="Enter Your Designation" name="designation" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label>Company</label>
                                <input ref={companyRef} type="text" className="form-control" placeholder="Enter Your Company Name" name="company" required />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Review</label>
                                <input ref={reviewRef} type="text" className="form-control" placeholder="Enter Your Review" name="reviews" required />
                            </div>
                        </div>
                    </form>
                    <div className='d-flex'>
                        <button className="btn btn-primary my-3 ml-auto px-4" type="submit" form="useForm" >Save</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddReview;