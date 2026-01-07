import React, { useState } from 'react';
import Card from '../../components/ui/Card/Card';
import Modal from '../../components/ui/Modal/Modal';
import { PROJECTS } from '../../utils/constants';
import './Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="projects-page section">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    {PROJECTS.map((project) => (
                        <Card
                            key={project.id}
                            {...project}
                            onClick={() => openModal(project)}
                        />
                    ))}
                </div>
            </div>

            <Modal
                isOpen={!!selectedProject}
                onClose={closeModal}
                title={selectedProject?.title}
            >
                {selectedProject && (
                    <div className="project-details">
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="project-modal-image"
                        />
                        <p className="project-modal-description">{selectedProject.description}</p>
                        <div className="project-modal-tags">
                            <strong>Technologies:</strong>
                            <div className="tags-list">
                                {selectedProject.tags.map((tag, i) => (
                                    <span key={i} className="tag-item">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="project-modal-links">
                            <a href={selectedProject.link} className="project-link-btn" target="_blank" rel="noopener noreferrer">
                                View Live Demo
                            </a>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Projects;
