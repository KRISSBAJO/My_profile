// Availability.js
import 'react-big-calendar/lib/css/react-big-calendar.css';

import React, { useState, useEffect } from 'react';
import './Availability.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import BookingModal from '../../modal/BookingModal';
import moment from 'moment';

const localizer = momentLocalizer(moment);

function Availability() {
    const [events, setEvents] = useState([]); 
    const [showModal, setShowModal] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);

    useEffect(() => {
        fetch('/availability')
            .then(res => res.json())
            .then(data => {
                setEvents(data);
            });
    }, []);

    const handleSelect = ({ start, end }) => {
        setSelectedSlot({ start, end });
        setShowModal(true); 
    };

    const handleBooking = (bookingDetails) => {
        fetch('/book', {
            method: 'POST',
            body: JSON.stringify({ ...bookingDetails, ...selectedSlot }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Refresh events or update state after booking
            setShowModal(false);
        });
    };

    return (
        <div className="availability-container">
            <h2>My Availability</h2>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                onSelectSlot={handleSelect}
                selectable={true}
            />

            {showModal && <BookingModal onClose={() => setShowModal(false)} onSubmit={handleBooking} />}
            
            <p>Please <a href="/contact">contact me</a> to schedule a specific time.</p>
        </div>
    );
}
export default Availability;
