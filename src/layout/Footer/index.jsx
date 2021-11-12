import React from "react";
import { Link } from "react-router-dom";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <Link
                className="footer-link" id="githubLink"
                to={{ pathname: "https://github.com/cbmcdougall" }}
                target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                    className="footer-icon" id='github'
                    icon={faGithubSquare} size="2x" title="GitHub: cbmcdougall"
                />
            </Link>
            <div className="text-container">
                <span className="footer-text">Calum McDougall © 2021</span>
            </div>
            <Link
                className="footer-link" id="emailLink"
                to={{ pathname: "mailto: c_mcdougall97@yahoo.co.uk" }}
                target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                    className="footer-icon" id='email'
                    icon={faEnvelope} size="2x" title="Email: c_mcdougall97@yahoo.co.uk"
                />
            </Link>
        </footer>
    )
}