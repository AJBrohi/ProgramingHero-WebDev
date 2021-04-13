import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import {UserContext} from '../../App';

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => console.log(data);

    console.log(watch("name")); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue = {loggedInUser.name} {...register("name", { required: true })} placeholder="Your Name" />
            {errors.name && <span className='error'>Name is required</span>}

            <input {...register("email", { required: true })} placeholder="Your Email" defaultValue = {loggedInUser.email}/>
            {errors.name && <span className='error'>Email is required</span>}

            <input {...register("address", { required: true })} placeholder="Your Address" />
            {errors.name && <span className='error'>Address is required</span>}

            <input {...register("phone", { required: true })} placeholder="Your Phone Number" />
            {errors.name && <span className='error'>Phone Number is required</span>}

            <input type="submit" />
        </form>
    );
}

export default Shipment;