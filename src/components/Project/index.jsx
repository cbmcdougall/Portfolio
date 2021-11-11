import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css';
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

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
                        <FontAwesomeIcon className="project-github-link" icon={faGithubSquare} size="3x" />
                    </Link>
                    {
                        deploy &&
                        <Link
                            className="project-link"
                            to={{ pathname: deploy }}
                            target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="project-deploy-link" icon={faExternalLinkAlt} size="3x" />
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}