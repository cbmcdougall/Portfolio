import React from "react";
import { Link } from "react-router-dom";
import profilePic from './profile-photo.webp';
import './style.css';

export const Profile = () => {
    return (
        <section className="profile">
            <div className="profile-card">
                <div className="profile-img-container">
                    <img src={profilePic} alt="Profile Photo" className="profile-img" width="300px" height="300px" />
                </div>
                <div className="profile-text-container">
                    <h1 className="profile-heading">Hey, i'm Calum!</h1>
                    <p className="profile-text">This is my portfolio site to provide you with info about me!</p>
                    <p className="profile-text"> Click one of the links below or use the navbar above to visit each page.</p>
                    <ul className="profile-links">
                        <li className="profile-list-item">
                            <Link className="profile-link" to="/About">About</Link>
                        </li>
                        <li className="profile-list-item">
                            <Link className="profile-link" to="/Portfolio">Portfolio</Link>
                        </li>
                        <li className="profile-list-item">
                            <Link className="profile-link" to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}