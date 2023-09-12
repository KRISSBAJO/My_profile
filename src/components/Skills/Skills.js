import React from 'react';
import './Skills.css';

function Skills() {
    const [itemsToShow, setItemsToShow] = React.useState(5);  // Initially show 4 items
    const [showMore, setShowMore] = React.useState(true);
    const [showLessButton, setShowLessButton] = React.useState(false);

    const skillsData = [
        { title: 'Programming', content: 'Python, Bash Shell Scripting, Basic Java', icon: 'fa-code' },
        { title: 'Data', content: 'Hadoop Big Data, SQL, Cassandra', icon: 'fa-database' },
        { title: 'DevOps Tools', content: 'Kubernetes, Docker, Jenkins', icon: 'fa-cogs' },
        { title: 'Monitoring Tools', content: 'Prometheus, Grafana, Filebeat +ELK', icon: 'fa-eye' },
        { title: 'Cloud', content: 'AWS, Azure, On-Premise', icon: 'fa-cloud' },
        { title: 'Infrastructure as Code', content: 'Ansible, Terraform, Cloud Formation', icon: 'fa-code-fork' },
        { title: 'Web Development', content: 'Full Stack Developer (In view)', icon: 'fa-laptop' },
        { title: 'Operating Systems', content: 'Linux, Windows', icon: 'fa-server' },
        { title: 'Front End', content: 'HTML, CSS, JavaScript, ReactJS, Angular', icon: 'fa-desktop' },
        { title: 'Back End', content: 'NodeJS, ExpressJS, MongoDB, MySQL, PostgreSQL', icon: 'fa-database' },
        { title: 'Version Control', content: 'Git, GitHub, Bitbucket', icon: 'fa-git' },
        { title: 'Project Management', content: 'Agile, Scrum, Kanban', icon: 'fa-tasks' },
        { title: 'Soft Skills', content: 'Teamwork, Communication, Problem Solving, Time Management', icon: 'fa-users' },
        { title: 'Other', content: 'Microsoft Office Suite, Google Suite, Jira, Confluence', icon: 'fa-folder-open' },
        { title: 'Personal', content: 'Analytical, Creative, Flexible, Adaptable, Team Player, Good Communicator, Problem Solver', icon: 'fa-user-o' },
        { title: 'General', content: 'Proactive, Self-motivated, Fast Learner, Detail Oriented, Organized,', icon: 'fa-star' }
      

    ];

    const chunkedData = [];
    for (let i = 0; i < skillsData.length; i += 5) {
        chunkedData.push(skillsData.slice(i, i + 5));
    }

    function loadMoreItems() {
        setItemsToShow(itemsToShow + 5);
        if (itemsToShow + 8 >= skillsData.length) {
            setShowMore(false);
        }
        setShowLessButton(true);  // Set showLessButton to true once Load More is clicked
    }

    function loadLessItems() {
        setItemsToShow(5);  // Reset itemsToShow to its initial value
        setShowLessButton(false);  // Hide the Show Less button
        setShowMore(true);  // Make sure the Load More button is visible again
    }

    return (
        <main className="skills-container">
            <h2 className="skills-heading">Skills & Tools</h2>
        
            {skillsData.slice(0, itemsToShow).map((skill, index) => (

                <div key={index} className="skill-card">
                    <i className={`fa ${skill.icon} skill-icon`}></i>
                    <h3 className="skill-title">{skill.title}</h3>
                    <p className="skill-content">{skill.content}</p>
                </div>
            ))}
    
    {
                showMore && 
                <button className="load-less-button" onClick={loadMoreItems}>
                    Load More
                </button>
            }
            
            {
                showLessButton && 
                <button className="load-less-button" onClick={loadLessItems}>
                    Show Less
                </button>
            }
        </main>
    );
}
export default Skills;





