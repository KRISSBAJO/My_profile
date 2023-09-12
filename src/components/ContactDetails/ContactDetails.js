import React from 'react';
import './ContactDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faDownload } from '@fortawesome/free-solid-svg-icons';
// Import CV
import CV from '../../assets/christopher_cv.pdf';

function ContactDetails() {
    return (
        <section className="contact-container">
            <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: '#745884', marginRight: '7px' }} />
                <span>krissbajo@gmail.com</span> 
            </div>
            <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} style={{ color: 'green' }} />
                <span>Tel: 615-554-3592</span> 
            </div>
            <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'red' }} />
                <span>United States</span>
            </div>
            {/* Adding the Download CV option */}
            <div className="contact-item">
                <FontAwesomeIcon icon={faDownload} style={{ color: '#007BFF' }} />
                <a href={CV} download className="download-link">Download CV</a>
            </div>
        </section>
    );
}

export default ContactDetails;
