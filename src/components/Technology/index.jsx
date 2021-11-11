import React from 'react';
import './style.css';

export const Technology = ({ data }) => {
    const { title, image } = data;

    return (
        <div className="technology-card">
            <span className="technology-title">{title}</span>
            <img
                src={image} alt={`title image`}
                className="technology-image"
                width="100px" height="100px"
            />
        </div>
    )
}
