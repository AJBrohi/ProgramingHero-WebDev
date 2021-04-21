import React, { useRef, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddPrice = () => {
    const [priceState, setPriceState] = useState({});

    const titleRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;
        const price = event.target.price.value;

        const priceDetails = {
            title,
            description,
            price
        }
        console.log(priceDetails);
        setPriceState(priceDetails);
        // console.log(priceState);
        fetch('http://localhost:5000/addPrice', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(priceDetails)
        })
            .then(res => res.json())
            .then(data => {
                // titleRef.current.value = null;
                // descriptionRef.current.value = null;
                // priceRef.current.value = null;
                alert("Price Added");
            })
            .catch(err => console.log(err))
    };

    return (
        <section className="container-fluid row">
            <div className="col-md-2"><Sidebar></Sidebar></div>
            <div className="col-md-10 p-4 pr-5">
                <h4 className="mt-5 ml-2">Add Price</h4>
                <div className="input-form p-3">
                    <form onSubmit={handleSubmit} className="card shadow py-3 px-4" id="useForm">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label>Title</label>
                                <input ref={titleRef} type="text" className="form-control" placeholder="Enter Title" name="title" required />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Description</label>
                                <input ref={descriptionRef} type="text" className="form-control" placeholder="Enter Description" name="description" required />
                            </div>
                            <br /><br />
                            <div className="col-md-6 form-group">
                                <label>Price</label>
                                <input ref={priceRef} type="text" className="form-control" placeholder="Enter Price" name="price" required />
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
}

export default AddPrice;