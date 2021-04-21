import React, { useContext, useRef, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [service, setService] = useState({});

    const titleRef = useRef();
    const descriptionRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;

        const imgData = new FormData();
        imgData.set("key", "be7ca2067d9bc23c404a850e0f63b13a");
        imgData.append('image', event.target.file.files[0]);

        fetch("https://api.imgbb.com/1/upload", {
            method: 'POST',
            body: imgData,
        })
            .then(res => res.json())
            .then(data => {
                const serviceDetails = {
                    title,
                    description,
                    imgUrl: data.data.display_url
                }
                setService(serviceDetails);
                fetch('http://localhost:5000/addService', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(serviceDetails)
                })
                    .then(res => res.json())
                    .then(data => {
                        titleRef.current.value = null;
                        descriptionRef.current.value = null;
                        alert("Service Added");
                    })

            })
            .catch(err => console.log(err))
    };

    return (
        <section className="container-fluid row">
            <div className="col-md-2"><Sidebar></Sidebar></div>
            <div className="col-md-10 p-4 pr-5">
            <h4 className="mt-5 ml-2">Add a Service</h4>
            <div className="input-form p-3">
                <form onSubmit={handleSubmit} className="card shadow py-3 px-4" id="useForm">
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>Service Title</label>
                            <input ref={titleRef} type="text" className="form-control" placeholder="Enter Service Title" name="title" required />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Description</label>
                            <input ref={descriptionRef} type="text" className="form-control" placeholder="Enter Description" name="description" required />
                        </div>
                        <br /><br />
                        <div className="col-md-6 form-group">
                            <label>Picture of Service</label>
                            <input type="file" name="file" className="d-none" id="upload-file" required /><br />
                            <label className='btn btn-primary  form-control overflow-hidden' id="upload-label" htmlFor="upload-file" style={{ width: 'fit-content' }} title='Upload image'>Upload </label>
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

export default AddService;