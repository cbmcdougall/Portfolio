import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from './waving-bulbasaur.webp';
import { Navbar } from "../Navbar";
import './style.css';

export const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const handleClick = () => setNavOpen(prevState => !prevState);
    return (
        <>
            <header className="header">
                <div className="header-img-container">
                    <img src={logo} alt="Waving Bulbasaur Drawing" id="headerImg" width="60px" height="60px" aria-hidden="true" />
                </div>
                <div className="heading-container">
                    <h1 className="heading">Calum McDougall</h1>
                </div>
                <div className="nav-menu-container" aria-label={`${navOpen ? "Close" : "Open"} NavBar`}>
                    <FontAwesomeIcon
                        onClick={handleClick} className="nav-menu"
                        icon={navOpen ? faTimes : faBars}
                    />
                </div>
            </header>
            {navOpen && <Navbar />}
        </>
    )
}