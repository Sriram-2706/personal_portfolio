import React from 'react';
import './Card.css';

const Card = ({ image, title, description, tags, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-image-container">
                <img src={image} alt={title} className="card-image" />
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <div className="card-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="card-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
