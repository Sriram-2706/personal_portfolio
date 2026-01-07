import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button/Button';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Hi, I'm <span className="highlight">Sriram Nagarajan</span>.
                            <br />
                            AI & Data Science Student | Frontend Developer
                        </h1>
                        <p className="hero-subtitle">
                            Passionate about building intelligent web applications and solving complex problems with AI and modern web technologies.
                        </p>
                        <div className="hero-buttons">
                            <Button onClick={() => navigate('/projects')}>View Work</Button>
                            <Button variant="secondary" onClick={() => navigate('/contact')}>Contact Me</Button>
                        </div>
                    </div>
                    <div className="hero-image-container">
                        <div className="hero-blob"></div>
                        <img
                            src="https://placehold.co/400x400/3b82f6/ffffff?text=Avatar"
                            alt="Profile"
                            className="hero-image"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
