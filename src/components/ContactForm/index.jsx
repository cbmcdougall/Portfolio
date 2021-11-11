import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })

    const handleInput = e => {
        const { name, value } = e.target;
        setFormData(values => ({ ...values, [name]: value }))
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(formData);
        // Figure out how to send email
    }
    return (
        <div id="contactFormContainer">
            {/* <form id="contactform" action="https://formsubmit.io/send/c_mcdougall97@yahoo.co.uk" method="POST"> */}
            <form onSubmit={handleFormSubmit} id="contactForm">
                <div className="contact-field">
                    <label htmlFor="name" className="contact-label">Name</label>
                    <input
                        className="contact-input" id="name"
                        name="name" type="text" placeholder="What is your name?"
                        value={formData.name} onChange={handleInput}
                    />
                </div>
                <div className="contact-field">
                    <label htmlFor="email" className="contact-label">Email</label>
                    <input
                        className="contact-input" id="email" required
                        name="email" type="email" placeholder="What is your email?"
                        value={formData.email} onChange={handleInput}
                    />
                </div>
                <div className="contact-field">
                    <label htmlFor="subject" className="contact-label">Subject</label>
                    <input
                        className="contact-input" id="subject" required
                        name="subject" type="text" placeholder="What is the subject?"
                        value={formData.subject} onChange={handleInput}
                    />
                </div>
                <div className="contact-field">
                    <label htmlFor="message" className="contact-label">Message</label>
                    <textarea
                        className="contact-input" id="message" required
                        name="message" rows="5" placeholder="What is your message?"
                        value={formData.message} onChange={handleInput}
                    ></textarea>
                </div>

                {/* honeypot to fool spambots, get hecked */}
                <input name="_formsubmit_id" type="text" style={{ display: "none" }} />

                <button type="submit">Send Email <FontAwesomeIcon id="sendEmailIcon" icon={faPaperPlane} /></button>
            </form>
        </div>
    )
}
