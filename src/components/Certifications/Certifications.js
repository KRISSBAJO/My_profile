import React from 'react';
import './Certifications.css';
import aws from '../../assets/aws.jpeg';
import terraform from '../../assets/terraform.jpeg';
import k8s from '../../assets/kubernetes.jpeg';
import nim from '../../assets/nim.jpeg';

function Certifications() {
    const certifications = [
        {
            name: "Certified AWS Solution Architect Associate",
            logo: aws,
            description: "Credential that validates the ability to architect and deploy applications on AWS technologies.",
            link: "https://www.credly.com/badges/79d79c16-8b46-4824-b64a-110a3882fb0e?"
        },
        {
            name: "HashiCorp Certified Terraform Associate",
            logo: terraform,
            description: "Certification showcasing proficiency in infrastructure as code (IaC) and Terraform.",
            link: "https://www.credly.com/badges/333aeab7-8f36-4cea-99fe-cfcbf09192ee/" 
        },
        {
            name: "Certified Kubernetes Application Developer",
            logo: k8s,
            description: "A testament to the expertise in designing, building, and maintaining cloud-native applications with Kubernetes.",
            link: "https://www.credly.com/badges/d504dbbb-abc5-4a20-8fcb-a17905d939d7/" 
        },
        {
            name: "Professional Manager - NIM",
            logo: nim,
            description: "Accreditation from the Nigerian Institute of Management highlighting managerial prowess and best practices.",
            link: "#nim_link_here" // replace with actual link
        }
    ];

    return (
        <div className="certifications-container">
            <h2>Certifications</h2>
            <ul className="certifications-list">
                {certifications.map((cert, index) => (
                    <li key={index} className="certification-item">
                        {cert.logo && <img src={cert.logo} alt={cert.name} className="cert-logo" />}
                        <div className="cert-content">
                            <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                {cert.name}
                            </a>
                            <p className="cert-description">{cert.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
    
}

export default Certifications;
