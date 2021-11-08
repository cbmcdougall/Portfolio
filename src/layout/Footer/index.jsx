import React from "react";
import { Link } from "react-router-dom";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLongArrowAltLeft, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <Link 
                className="footer-link" id="githubLink"
                to={{ pathname: "https://github.com/cbmcdougall"}} 
                target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="footer-icon" id='github' icon={faGithubSquare} size="2x"/>
            </Link>
            <div className="text-container">
                <FontAwesomeIcon className="contact-icon" icon={faLongArrowAltLeft} size="2x" />
                <span className="footer-text">Contact Me</span>
                <FontAwesomeIcon className="contact-icon" icon={faLongArrowAltRight} size="2x" />
            </div>
            <Link 
                className="footer-link" id="emailLink"
                to={{ pathname: "mailto:c_mcdougall97@yahoo.co.uk"}} 
                target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="footer-icon" id='email' icon={faEnvelope} size="2x"/>
            </Link>
        </footer>
    )
}