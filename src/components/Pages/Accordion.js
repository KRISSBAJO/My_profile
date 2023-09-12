import { useState } from "react";
import './Accordion.css';

export const Accordion = ({section}) => {
    const {title, content} = section;
    const [show, setShow] = useState(false);

    const renderContent = () => {
        if (Array.isArray(content)) {
            if (typeof content[0] === 'string') {
                // Handle awards (simple string array)
                return (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                );
            } else {
                // Handle workExperiences and educations (array of objects)
                return (
                    <div>
                        {content.map((item, index) => (
                            <div key={index}>
                                <h3>{item.title || item.institution}</h3>
                                <p>{item.duration || item.degree} - {item.date || item.location}</p>
                                {item.responsibilities && 
                                    <ul>
                                        {item.responsibilities.map((resp, idx) => (
                                            <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>
                                }
                            </div>
                        ))}
                    </div>
                );
            }
        } else {
            // Handle simple string content
            return <p>{content}</p>;
        }
    };

    return (
        <div className="accordion-section">
            <h2 className="accordion-header" id={`accordion-flush-heading-${section.id}`}>
                <button onClick={() => setShow(!show)} className="accordion-button" data-accordion-target={`#accordion-flush-body-${section.id}`} aria-expanded="true" aria-controls={`accordion-flush-body-${section.id}`}>
                    <span className="accordion-title">{title}</span>
                    { !show && <span className="accordion-icon accordion-icon-collapsed"></span> }
                    { show && <span className="accordion-icon accordion-icon-expanded"></span> }

                </button>
            </h2>     
            { show && (
                <div className="accordion-content" id={`accordion-flush-body-${section.id}`} aria-labelledby={`accordion-flush-heading-${section.id}`}>
                    <div className="accordion-content-text">
                        {renderContent()}
                    </div>
                </div> 
            ) }                           
        </div>
    );
}
