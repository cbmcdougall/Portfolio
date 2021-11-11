import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { ContactForm } from '../../components';
import './style.css';

export const Contact = () => {
    return (
        <section id="contact">
            <h2 className="contact-header">Contact Me!</h2>
            <div className="contact-container">
                <div id="contactMethods">
                    <div className="contact-method">
                        <FontAwesomeIcon className="contact-icon" icon={faEnvelope} size="3x" />
                        <div className="contact-method-text">
                            <h3 className="contact-method-title">Email</h3>
                            <span className="contact-method-subtitle">c_mcdougall97@yahoo.co.uk</span>
                        </div>
                    </div>
                    <div className="contact-method">
                        <FontAwesomeIcon className="contact-icon" icon={faGithubSquare} size="3x" />
                        <div className="contact-method-text">
                            <h3 className="contact-method-title">Github</h3>
                            <span className="contact-method-subtitle">cbmcdougall</span>
                        </div>
                    </div>
                    <div className="contact-method">
                        <FontAwesomeIcon className="contact-icon" icon={faMapMarkerAlt} size="3x" />
                        <div className="contact-method-text">
                            <h3 className="contact-method-title">Location</h3>
                            <span className="contact-method-subtitle">Fife</span>
                        </div>
                    </div>
                </div>
                {/* <ContactForm /> */}
            </div>
        </section>
    )
}