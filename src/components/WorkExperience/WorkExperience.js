import React, { useState } from 'react';
import './WorkExperience.css';

import dominion_logo from '../../assets/dominion_logo.jpg';
import vanderbilt_logo from '../../assets/vanderbilt_logo.jpg';
import zenith_logo from '../../assets/zenith_logo.jpg';

function WorkExperience() {
    const [experiences, setExperiences] = useState([
        // ... similar structure for each experience
        {
            title: "Dominion System - DevOps Engineer",
            logo: dominion_logo,
            duration: "Sept 2017 – to present",
            location: "Nashville, Tennessee, United States",
            responsibilities: [
                "Used GIT & GitHub as SCM tool, created branches, tags and ...",
                "Used Ansible to automate the deployment of the application on the servers",
                "Performing all system administrator’s roles and responsibility",
                "Maintained and configured the Jenkins server and the build jobs",
                "Used Docker to containerize the application and deployed on the Kubernetes cluster",
                "Used Kubernetes to deploy the application on the cluster and managed the cluster",
                "Configure cloud resources using Terraform and Ansible",
                "Managed CICD pipelines using Jenkins and GitHub",
                "Automated the entire Production deployment from code check-in to production using Jenkins, Ansible, Docker and Kubernetes",
                "Perform continous monitoring of the application and the infrastructure prometheus and grafana",
                "Orchetrated containerlization with Kubernetes cluster using AWS EKS",
                "Supervised and contributed to the development of the company's website using ReactJS, HTML, CSS, JavaScript, NodeJS, ExpressJS, MongoDB, MySQL, AWS, and Git",
                "Developed and maintained the company's internal applications using Python, Django, HTML, CSS, JavaScript, MySQL, AWS, and Git",


            ]
        },
        {
            title: "Dominion System - Jr- DevOps Engineer",
            logo: dominion_logo,
            duration: "Sept 2015 – 2017",
            location: "Nashville, Tennessee, United States",
            responsibilities: [
                "Automated builds and deployments using Jenkins and Docker to reduce human error and speed up ..",
                "Created and maintained fully automated CI/CD pipelines for code deployment using Jenkins",
                "Used GIT & GitHub as SCM tool, created branches, tags and ...",
                "Used Ansible to automate the deployment of the application on the servers",
                "Maintained and configured the Jenkins server and the build jobs",
                "Used Docker to containerize the application and deployed on the Kubernetes cluster",
                "Used Kubernetes to deploy the application on the cluster and managed the cluster",
                "Provision and manage the infrastructure on AWS Resorces  using Terraform and Ansible",
                "Configured AWS CloudFormation to create and manage the infrastructure on AWS",
                "Used AWS CloudWatch to monitor the application and the infrastructure",
                "Used AWS S3 to store the artifacts and the backups",
                "Used AWS EC2 to create and manage the instances",
                "Orchetrated containerlization with Kubernetes cluster using AWS EKS",
                
                "Performing all system administrator’s roles and responsibility"
            ]
        },
        {
            title: "Vanderbilt Medical Center - Patient Transporter",
            logo: vanderbilt_logo,
            duration: "Sept 2013 – 2015",
            location: "Nashville, Tennessee, United States",
            responsibilities: [
                "Transported patients to and from various locations within the hospital",
                "Assisted patients with ambulation and transfers",
                "Assisted with patient care as needed",
                "Maintained a clean and safe environment for patients and staff",
                "Provided excellent customer service to patients and families",
                "Performin other duties as assigned"
            ]
        }, 
        {
            title: "Zenith Bank Plc - Head of Operations & IT",
            logo: zenith_logo,
            duration: "Sept 2009 – 2013",
            location: "Lagos, Nigeria",
            responsibilities: [
                "Managed the day-to-day operations of the bank",
                "Managed the IT department of the bank",
               

                "Performin other duties as assigned"
            ]
        },
        
       
    ]);

    const toggleDetails = (index) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index].isOpen = !updatedExperiences[index].isOpen;
        setExperiences(updatedExperiences);
    };

    return (
        <div className="work-experience-container">
            {experiences.map((exp, index) => (
                <div key={index} className="work-experience-card">
                    <div className="experience-header">
                    <img src={exp.logo} alt="Company Logo" className="company-logo" />

                        <h3 className="job-title">{exp.title}</h3>
                        <span className="job-duration">{exp.duration}</span>
                    </div>
                    <span className="job-location">{exp.location}</span>
                    <ul className="job-responsibilities">
                        {(exp.isOpen ? exp.responsibilities : exp.responsibilities.slice(0, 2)).map((res, idx) => (
                            <li key={idx}>{res}</li>
                        ))}
                    </ul>
                    <a 
                        href="#!" 
                        className="read-more"
                        onClick={(e) => {
                            e.preventDefault();  // Prevents the default link action
                            toggleDetails(index);
                        }}
                    >
                        {exp.isOpen ? "Read Less" : "Read More"}
                    </a>
                </div>
            ))}
        </div>
    );
}

export default WorkExperience;