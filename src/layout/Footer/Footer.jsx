import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <p className="footer-text">
                    &copy; {currentYear} My Portfolio. All rights reserved.
                </p>
                <div className="footer-socials">
                    <a href="https://github.com/Sriram-2706" className="footer-social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/sriram-nagarajan-019b93255/" className="footer-social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://leetcode.com/u/Sriram-2706/" className="footer-social-link" target="_blank" rel="noopener noreferrer">LeetCode</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
