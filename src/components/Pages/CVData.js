// cvData.js
import dominion_logo from '../../assets/dominion_logo.jpg';
const workExperiences = [
    {
        title: "Dominion System - DevOps Engineer",
        logo: dominion_logo,  // assuming you have this imported or defined somewhere
        duration: "Sept 2017 – to present",
        location: "Nashville, Tennessee, United States",
        responsibilities: [
            "Used GIT & GitHub as SCM tool, created branches, tags and ...",
            // ... other responsibilities
        ]
    },
    {
        title: "Dominion System - Jr- DevOps Engineer",
        logo: dominion_logo,
        duration: "Sept 2015 – 2017",
        location: "Nashville, Tennessee, United States",
        responsibilities: [
            "Automated builds and deployments using Jenkins and Docker to reduce human error and speed up ..",
            // ... other responsibilities
        ]
    },
    // ... similar structure for other experiences
];

const educations = [
    {
        institution: "Landmark Metropolitan University",
        degree: "BTech Computer Engineering",
        date: "May, 2020"
    },
    {
        institution: "Ahmadu Bello University Zaria",
        degree: "Post Graduate Diploma",
        date: "11/2009"
    },
    {
        institution: "Kaduna State Poly Kaduna",
        degree: "Higher National Diploma Degree",
        date: "05/2002"
    }
];

const awards = [
    "Best Graduating Student - Kaduna State Polytechnic, 2002",
    "Best Employee Award - Dominion Systems, 2020 & 2022",
    "Most Improved Employee - Zenith Bank, Software Transition Period"
];

const sections = [
    {
        "id": 1,
        "title": "Work Experience",
        "content": workExperiences
    },
    {
        "id": 2,
        "title": "Education",
        "content": educations
    },
    {
        "id": 3,
        "title": "Awards",
        "content": awards
    },
    // ... other sections (like Certifications, etc.)
];

export default sections;