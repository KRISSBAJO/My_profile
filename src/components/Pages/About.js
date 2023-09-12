import React from 'react';
import './About.css';

function About() {
    return (
        <section id="about" className="about-section">
            <h2>About Me</h2>
            <div className="about-content">
                <p>
                    With a strong foundation in software development and cloud computing, I've dedicated my career to bridging the gap between development and operations. As a passionate DevOps Engineer, I believe in automation, efficient infrastructure management, and creating robust CI/CD pipelines that ensure seamless deployments.
                </p>
                <p>
                    My experience as a Platform Engineer has allowed me to design and manage scalable, high-availability systems, optimizing for performance and security. Holding an AWS Solution Architect certification, I am adept at crafting innovative cloud solutions that drive business objectives and enhance user experiences.
                </p>
                <p>
                    Beyond the technical aspects, I pride myself on being a proactive communicator, always eager to collaborate with cross-functional teams to achieve excellence. Continuous learning and adapting to the ever-evolving tech landscape is my mantra.
                </p>
            </div>
        </section>
    );
}

export default About;

