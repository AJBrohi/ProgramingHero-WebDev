import React from 'react';

const AppointmentsByDate = ({appointments}) => {
    return (
        <div>
            <h1>appointments: {appointments.length}</h1>
            {
                appointments.map(appointment => <li key={appointment._id}>{appointment.name}</li>)
            }
        </div>
    );
};

export default AppointmentsByDate;