// BookingModal.js
import React from 'react';

const BookingModal = ({ onClose, onSubmit }) => {
    return (
        <div className="booking-modal">
            {/* Your modal content and logic goes here */}
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default BookingModal;
