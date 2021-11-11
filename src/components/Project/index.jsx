import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

export const Project = ({ projectInfo }) => {
    const { title, image, github, deploy, description } = projectInfo;
    // const [showDesc, setShowDesc] = useState(false);

    // const handleMouseEnter = () => setShowDesc(true);
    // const handleMouseLeave = () => setShowDesc(false);

    return (
        <div
            className="project-card"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        >
            {/* <div className={`project-overview${showDesc ? " blurred" : ""}`}> */}
            <div className='project-overview'>
                <div className="project-img-container">
                    <img
                        src={image} alt={`${title} image`}
                        className="project-img"
                        width="450px" height="250px"
                    />
                </div>
                <div className="project-title-container">
                    <h1 className="project-title">{title}</h1>
                </div>
            </div>
            <div className="project-info-container">
                <div className="project-description-container">
                    <p className="project-description">{description}</p>
                </div>
                <div className="project-links">
                    <Link
                        className="project-link"
                        to={{ pathname: github }}
                        target="_blank" rel="noreferrer">
                        <button className="project-github-link">GitHub</button>
                    </Link>
                    {
                        deploy &&
                        <Link
                            className="project-link"
                            to={{ pathname: deploy }}
                            target="_blank" rel="noreferrer">
                            <button className="project-deploy-link">View</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}