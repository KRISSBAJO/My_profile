import React from 'react';
import ContactDetails from '../ContactDetails/ContactDetails';
import Summary from '../Summary/Summary';
import Certifications from '../Certifications/Certifications';
import Skills from '../Skills/Skills';

import Feedback from '../Header/Feedback';

import { Cv } from '../Pages/Cv';

function Home() {
    return (
        <>
            <ContactDetails />
            <Summary />
            <Cv />
           
            <Certifications />
            <Skills />
            <Feedback />
            {/* <WorkExperience />
            <Education />
            <Skills />
            <Certifications />
            <Feedback /> */}
        </>
    );
}

export default Home;
