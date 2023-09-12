import React from 'react';
import './Education.css';

function Education() {
    return (
        <div className="container">
            <div className="education-container">
                <h2>EDUCATION</h2>
                <div className="institution">
                    <h3>Landmark Metropolitan University</h3>
                    <p>BTech Computer Engineering – May, 2020</p>
                </div>
                <div className="institution">
                    <h3>Ahmadu Bello University Zaria</h3>
                    <p>Post Graduate Diploma - 11/2009</p>
                </div>
                <div className="institution">
                    <h3>Kaduna State Poly Kaduna</h3>
                    <p>Higher National Diploma Degree - 05/2002</p>
                </div>
            </div>
            
            <div className="awards-container">
                <h2>AWARDS</h2>
                <ul>
                    <li>Best Graduating Student - Kaduna State Polytechnic, 2002</li>
                    <li>Best Employee Award - Dominion Systems, 2020 & 2022</li>
                    <li>Most Improved Employee - Zenith Bank, Software Transition Period</li>
                </ul>
            </div>
        </div>
    );
}

export default Education;
