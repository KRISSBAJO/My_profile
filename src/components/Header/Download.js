import React from 'react';
import './Download.css';
// Import the CV from the assets folder
import CV from '../../assets/christopher_cv.pdf';

function Download() {
    return (
        <div className="download-container">
            {/* Embed your CV for viewing using the object tag */}
            <object data={CV} type="application/pdf" width="100%" height="600px">
                Your browser does not support viewing PDF files. Please download the CV instead.
            </object>

            {/* Download Button */}
            <a href={CV} download className="download-btn">
                Download CV
            </a>
        </div>
    );
}

export default Download;

