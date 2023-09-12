import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <section id="portfolio" className="portfolio-section">
            <h2>Portfolio</h2>
            <table className="portfolio-table">
                <thead>
                    <tr>
                        <th>Client Name</th>
                        <th>Duration</th>
                        <th>Role/Job Title</th>
                        <th>Project Summary</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>LogaXP (HR Consultancy)</td>
                    <td>1 Year</td>
                    <td>DevOps and Development Supervisor</td>
                    <td>Built and deployed three HR software applications using ReactJs, Django, and Ruby, along with various DevOps tools for deployment.</td>
                </tr>

                    <tr>
                        <td>LogaXp (eCommerce company)</td>
                        <td>6 Months</td>
                        <td>Build and Release Engr</td>
                        <td>Continuous Integration using Git, GitHub, Maven, Jenkins, Nexus, SonarQube, Slack, Checkstyle Plugins (Regression testing) and Tomcat8</td>
                    </tr>
                    <tr>
                        <td>Dominion System (eCommerce company - Startup)</td>
                        <td>6 Months</td>
                        <td>DevOps Engr</td>
                        <td>AWS CONTINUOUS INTEGRATION PIPELINE (SERVERLESS). Tools: Codecommit, Codebuild, Codeartifact, Codedeploy, Sonar Cloud, Code Pipeline, S3 Bucket, SNS, IAM, AWS Session Manager, Cloudwatch and Warnings Next Generation Plugins (Checkstyle).</td>
                    </tr>
                    <tr>
                        <td>Dominion System (Fintech)</td>
                        <td>7 Months</td>
                        <td>Infrastructure Engineer</td>
                        <td>CICD using Jenkins Declarative Pipeline as a code, EKS, Helm in a Multi-Tier Environment</td>
                    </tr>
                    <tr>
                        <td>Dominion System (Self-Managed Kubernetes Cluster)</td>
                        <td>6 Months</td>
                        <td>DevOps Engr/ Build and monitoring</td>
                        <td>AWS EC2, Configure VPC, Create Subnets, LB, ELB Kubeadm, Weave CNI Plugin, Create and manage Several Control Plane and Nodes, Ingress, Metric Server. MongoDB and deploy Client application</td>
                    </tr>
                    <tr>
                        <td>Dominion System (FinTech)</td>
                        <td>2 Years</td>
                        <td>DevOps Engr/Deployment</td>
                        <td>AWS EKS, Secure VPC, WAF Sandwich, AWS EC2, Git, SAST, GitHub, Maven, Jenkins, Nexus, SonarQube, Docker, Docker Hub, Warnings Next Generation, Helm Chart, Terraform and Prometheus and Grafana.</td>
                    </tr>
                    <tr>
                        <td>Zenith Bank (FinTech)</td>
                        <td>7 Years</td>
                        <td>Operations/IT Specialist</td>
                        <td>Oversaw the development and deployment of multiple banking software applications.</td>
                    </tr>
                    <tr>
                    <td>GTBank (FinTech)</td>
                    <td>3 Years</td>
                    <td>System Administrator</td>
                    <td>Managed and maintained the bank's IT infrastructure, ensuring high uptime and seamless software integrations.</td>
                </tr>

                </tbody>
            </table>
        </section>
    );
}

export default Portfolio;
