import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hello! I'm Sriram Nagarajan, a Bachelor of Technology student in Artificial Intelligence and Data Science at Chennai Institute of Technology. I have a strong foundation in both AI/ML and web development.
                        </p>
                        <p>
                            I enjoy building scalable UI components and intelligent applications. My experience ranges from developing frontend interfaces with React to building deep learning models for computer vision and NLP tasks.
                        </p>

                        <div className="experience-section">
                            <h3>Experience</h3>
                            <div className="experience-item">
                                <h4>Front End Web Developer Intern @ DNYX</h4>
                                <p className="date">11/2022 – present | Chennai, India</p>
                                <ul>
                                    <li>Scaled UI components using React.js and Tailwind CSS, reducing load time by 30%.</li>
                                    <li>Led React workshops and peer code reviews, reducing front-end bugs by 15%.</li>
                                </ul>
                            </div>
                            <div className="experience-item">
                                <h4>Web Development Intern @ Academor</h4>
                                <p className="date">08/2023 – 10/2023 | Bengaluru, India</p>
                                <ul>
                                    <li>Developed a Weather App and Heritage Portal using React and Node.js.</li>
                                    <li>Integrated Django and SQL for secure data management.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="education-section">
                            <h3>Education</h3>
                            <div className="education-item">
                                <h4>B.Tech in AI & Data Science</h4>
                                <p>Chennai Institute of Technology | CGPA: 8.0/10</p>
                                <p className="date">2024 – 2028 (Expected)</p>
                            </div>
                        </div>

                        <div className="skills-section">
                            <h3>My Skills</h3>
                            <div className="skills-grid">
                                <div className="skill-item">Python</div>
                                <div className="skill-item">Java</div>
                                <div className="skill-item">C/C++</div>
                                <div className="skill-item">React</div>
                                <div className="skill-item">Tailwind CSS</div>
                                <div className="skill-item">Flask/Django</div>
                                <div className="skill-item">TensorFlow/PyTorch</div>
                                <div className="skill-item">SQL</div>
                                <div className="skill-item">LangChain</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
