import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section id="contact">
            <h2>Contact Information</h2>

            <div className="contact-info">
                <div className="contact-item">
                    <strong>Email:</strong>
                    <a href="mailto:youremail@example.com">krissbajo@logaxp.com</a>
                </div>

                <div className="contact-item">
                    <strong>Phone:</strong>
                    <a href="tel:+1234567890">+1 (615) 554-3592</a>
                </div>

                <div className="contact-item">
                    <strong>Address:</strong>
                    <p>13 Bell Street, Nashville, United state</p>
                </div>

                <div className="social-media">
                    <strong>Social Media:</strong>
                    <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
                    {/* Add more social media links as needed */}
                </div>
            </div>
        </section>
    );
}

export default Contact;

