import React, { useState } from 'react';
import './Feedback.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesome components
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';  // Import thumbs up icon

function Feedback() {
    const [likes, setLikes] = useState(0);
    const [feedback, setFeedback] = useState('');

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleSubmitFeedback = () => {
        if (feedback.trim() === "") {
            alert("Please enter your feedback before submitting.");
            return;
        }
        alert("Thank you for your feedback!");
        setFeedback(''); 
    };

    return (
        <div className="feedback-container">
            <button className="like-button" onClick={handleLike}>
                <FontAwesomeIcon icon={faThumbsUp} /> ({likes})
            </button>
            <textarea 
                value={feedback}
                onChange={handleFeedbackChange} 
                className="feedbbackInput" 
                placeholder="Leave feedback..."
            ></textarea>
            <button className="submit-feedback" onClick={handleSubmitFeedback}>Submit Feedback</button>
        </div>
    );
}

export default Feedback;
