import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>© 2023 Christopher Adebajo. All rights reserved.</p>
                
                <div className="footer-links">
                   
                    <a href="/availability">Availability</a>
                    <a href="https://linkedin.com/in/christopher-adebajo-292386132" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/KRISSBAJO" target="_blank" rel="noopener noreferrer">GitHub</a>
                    {/* Add other social media links here */}
                </div>
                
                {/* Optional: Newsletter Signup Form */}
                <div className="newsletter">
                    <input type="email" placeholder="Signup for IT newsletter" />
                    <button type="submit">Subscribe</button>
                </div>

                {/* Optional: Credits Section */}
                <div className="credits">
                    <p>Designed & Developed with ❤️ by Christopher Adebajo </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

