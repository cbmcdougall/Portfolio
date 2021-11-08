import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink className="navlink" exact to='/'><button className="navbutton">Home</button></NavLink>
            <NavLink className="navlink" to='/About'><button className="navbutton">About</button></NavLink>
            <NavLink className="navlink" to='/Portfolio'><button className="navbutton">Portfolio</button></NavLink>
            <NavLink className="navlink" to='/Contact'><button className="navbutton">Contact</button></NavLink>
        </nav>
    )
}