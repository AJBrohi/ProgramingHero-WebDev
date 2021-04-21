import React, { useEffect, useRef, useState } from 'react';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';

const AddOrder = () => {
  const [review, setReview] = useState({});
  const [serviceList, setServiceList] = useState([]);
  const [packageList, setPackageList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServiceList(data))

    fetch('http://localhost:5000/prices')
      .then(res => res.json())
      .then(data => setPackageList(data))
  }, []);

  console.log(packageList);

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const serviceRef = useRef();
  const packagesRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const service = event.target.service.value;
    const packages = event.target.packages.value;

    const orderDetails = {
      name,
      email,
      phone,
      service,
      packages,
      status: 'Pending'
    }
    setReview(orderDetails);
    fetch('http://localhost:5000/addOrder', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        nameRef.current.value = null;
        emailRef.current.value = null;
        phoneRef.current.value = null;
        serviceRef.current.value = null;
        packagesRef.current.value = null;
        alert("Thank you for your order");
      })
      .catch(err => console.log(err))
  };

  return (
    <section className="container-fluid row">
      <div className="col-md-2"><Sidebar></Sidebar></div>
      <div className="col-md-10 p-4 pr-5">
        <h4 className="mt-5 ml-2">Add a Order</h4>
        <div className="input-form p-3">
          <form onSubmit={handleSubmit} className="card shadow py-3 px-4" id="useForm">
            <div className="row">
              <div className="col-md-6 form-group">
                <label>Name</label>
                <input ref={nameRef} type="text" className="form-control" placeholder="Enter Your Name" name="name" required />
              </div>
              <div className="col-md-6 form-group">
                <label>Email</label>
                <input ref={emailRef} type="email" className="form-control" placeholder="Enter Your Email" name="email" required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label>Phone</label>
                <input ref={phoneRef} type="text" className="form-control" placeholder="Enter Your Phone Number" name="phone" required />
              </div>
              <div className="col-md-6 form-group">
                <label>Select Service</label>
                <select ref={serviceRef} type="text" className="form-control" name="service" required>
                  <option selected>Please Select A Service</option>
                  {
                    serviceList.map((services) =>
                      <option value={services.title}>{services.title}</option>
                    )
                  }
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label>Select Package</label>
                <select ref={packagesRef} type="text" className="form-control" name="packages" required>
                  <option selected>Please Select A Package</option>
                  {
                    packageList.map((packages) =>
                      <option value={packages.price}>{packages.title} - ${packages.price}</option>
                    )
                  }
                </select>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6 form-group">
              <h5>Payment</h5>
              <ProcessPayment></ProcessPayment>
              </div>
            </div>
          </form>
          <div className='d-flex'>
            <button className="btn btn-primary my-3 ml-auto px-4" type="submit" form="useForm" >Order</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddOrder;