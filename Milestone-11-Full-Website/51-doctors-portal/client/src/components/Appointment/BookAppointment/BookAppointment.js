import React from 'react';
import BookingCart from '../BookingCart/BookingCart';

const BookAppointment = ({date}) => {
    const bookingData = [
        {
            id: 1,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 PM',
            totalSpace: 10
        },
        {
            id: 2,
            subject: 'Cosmetic Dentistry',
            visitingHour: '10:05 AM - 11:30 AM',
            totalSpace: 10
        },
        {
            id: 3,
            subject: 'Teeth Cleaning',
            visitingHour: '5:00 PM - 6:30 PM',
            totalSpace: 10
        },
        {
            id: 4,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 PM',
            totalSpace: 10
        },
        {
            id: 5,
            subject: 'Cosmetic Dentistry',
            visitingHour: '10:05 AM - 11:30 AM',
            totalSpace: 10
        },
        {
            id: 6,
            subject: 'Teeth Cleaning',
            visitingHour: '5:00 PM - 6:30 PM',
            totalSpace: 10
        }
    ]
    return (
        <section>
            <h2 className="text-center" style={{color:'#1cc7c1'}}>Available Appointments on {date.toDateString()}</h2>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCart key={booking.id} booking={booking} date={date}></BookingCart>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;