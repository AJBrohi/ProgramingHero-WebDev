import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();
        console.log(data);
        
        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('Appointment created successfully.');
            }
        })


        
    }

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" {...register("name")} placeholder="Your Name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="text" {...register("phone")} placeholder="Phone Number" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="text" {...register("email")} placeholder="Email" className="form-control" />
                    </div>
                    <div className="form-group row">
                        <div className="col-4">

                            <select className="form-control" {...register("gender")} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>

                        </div>
                        <div className="col-4">
                            <input {...register("age")} className="form-control" placeholder="Your Age" type="number" />
                        </div>
                        <div className="col-4">
                            <input {...register("weight")} className="form-control" placeholder="Weight" type="number" />
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;