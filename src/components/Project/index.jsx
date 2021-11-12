import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export const Project = ({ projectInfo }) => {
    const { title, image, github, deploy, description, collaborators } = projectInfo;

    const renderCollaborators = () => collaborators.map((c, i) => <Link key={i} className="collab-link" to={{ pathname: c.url }} target="_blank" rel="noreferrer">{c.name}</Link>)

    return (
        <div className="project-card">
            <div className='project-overview'>
                <div className="project-img-container">
                    <img
                        src={image} alt={`${title} image`}
                        className="project-img"
                        width="400px" height="217px"
                    />
                </div>
                <div className="project-title-container">
                    <h1 className="project-title">{title}</h1>
                    <div className="project-links">
                        <Link
                            className="project-link"
                            to={{ pathname: github }}
                            target="_blank" rel="noreferrer"
                        >
                            <FontAwesomeIcon className="project-github-link" icon={faGithub} size="2x" title={`${title} Github`} />
                        </Link>
                        {
                            deploy &&
                            <Link
                                className="project-link"
                                to={{ pathname: deploy }}
                                target="_blank" rel="noreferrer"
                            >
                                <FontAwesomeIcon className="project-deploy-link" icon={faLink} size="2x" title={`${title} Deploy`} />
                            </Link>
                        }
                    </div>
                </div>
            </div>
            <div className="project-info-container">
                <div className="project-description-container">
                    <p className="project-description">{description}</p>
                </div>
                {
                    !!collaborators.length &&
                    <div className="project-collaborators-container">
                        <span>Collaborators:</span>
                        {renderCollaborators()}
                    </div>
                }
            </div>
        </div>
    )
}