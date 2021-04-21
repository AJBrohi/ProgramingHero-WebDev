import React, { useRef, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    const [adminState, setAdminState] = useState({});

    const emailRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;

        const adminDetails = {
            email,
            role: 'admin',
        }
        // console.log(adminDetails);
        setAdminState(adminDetails);
        fetch('http://localhost:5000/addAdmin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(adminDetails)
        })
            .then(res => res.json())
            .then(data => {
                alert("Admin Added");
            })
            .catch(err => console.log(err))
    };

    return (
        <section className="container-fluid row">
            <div className="col-md-2"><Sidebar></Sidebar></div>
            <div className="col-md-10 p-4 pr-5">
                <h4 className="mt-5 ml-2">Add Admin</h4>
                <div className="input-form p-3">
                    <form onSubmit={handleSubmit} className="card shadow py-3 px-4" id="useForm">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label>Email</label>
                                <input ref={emailRef} type="text" className="form-control" placeholder="Enter Email" name="email" required />
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

export default AddAdmin;