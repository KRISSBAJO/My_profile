import React from 'react';
import './Header.css';
import profilePicture from '../../assets/Christopher.jpeg';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faHome, faUser, faBriefcase, faEnvelope, faChartBar } from '@fortawesome/free-solid-svg-icons';


function Header() {
    return (
        <header className="header-container">
            <div className="header-top">
                <img src={profilePicture} alt="Christopher Adebajo" className="profile-picture"/>
                <div className="header-info">
                    <h1>CHRISTOPHER ADEBAJO <span className="verified-icon"><FontAwesomeIcon icon={faCheckCircle} /> Verified</span></h1>
                    <p>DevOps Engineer | Platform Engineer | AWS Solution Architect</p>
                </div>
            </div>
            <nav className="header-nav">
            <NavLink to="/" className="nav-item"><FontAwesomeIcon icon={faHome} title="Home"/></NavLink>
            <NavLink to="/about" className="nav-item"><FontAwesomeIcon icon={faUser} title="About"/></NavLink>
            <NavLink to="/portfolio" className="nav-item"><FontAwesomeIcon icon={faBriefcase} title="Porfolio" /></NavLink>
            <NavLink to="/contact" className="nav-item"><FontAwesomeIcon icon={faEnvelope} title="Contact"/></NavLink>
            <NavLink to="/ProfileChart" className="nav-item"><FontAwesomeIcon icon={faChartBar} title="ProfileChart"/></NavLink>

            </nav>
        </header>
    );
}

export default Header;

