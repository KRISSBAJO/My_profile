// Cv.js

import React from 'react';
import { Accordion } from "./Accordion";
import sections from './CVData';


export const Cv = () => {    
    return (
        <section className="cv-section">        
        
            <div className="cv-accordion">
                {sections.map((section) => {
                    return <Accordion key={section.id} section={section} />
                })}
           
            </div>
        </section>
    );
}
