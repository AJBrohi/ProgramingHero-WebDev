import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        const savedCart = getDatabaseCart();
        const orderDetails = { products: savedCart, shipment: data, orderTime: new Date() };
        console.log(orderDetails);
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(datas => {
                if (datas) {
                    processOrder();
                    alert('your order placed successfully');
                }
            })
    }

    // console.log(watch("name")); 
    // watch input value by passing the name of it

    return (
        <div className="row">
            <div className="col-md-6">
                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={loggedInUser.displayName} {...register("name", { required: true })} placeholder="Your Name" />
                    {errors.name && <span className='error'>Name is required</span>}

                    <input {...register("email", { required: true })} placeholder="Your Email" defaultValue={loggedInUser.email} />
                    {errors.name && <span className='error'>Email is required</span>}

                    <input {...register("address", { required: true })} placeholder="Your Address" />
                    {errors.name && <span className='error'>Address is required</span>}

                    <input {...register("phone", { required: true })} placeholder="Your Phone Number" />
                    {errors.name && <span className='error'>Phone Number is required</span>}

                    <input type="submit" />
                </form>
            </div>
            <div className="col-md-6">
                <h2>Payment</h2>
                <ProcessPayment></ProcessPayment>
            </div>
        </div>
    );
}

export default Shipment;