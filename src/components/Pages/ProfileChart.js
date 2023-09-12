import React from 'react';
import GoogleChart from './GoogleChart';
import './Profile.css'; // Ensure you import the CSS

function Profile() {
    return (
        <div className='profile-container'>
            <h2 className='profile-header'>Skills Profile</h2>
            <GoogleChart />
        </div>
    );
}

export default Profile;

