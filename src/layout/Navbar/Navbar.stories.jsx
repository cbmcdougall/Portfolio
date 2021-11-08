import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from ".";
import '../../style.css'

export default {
    title: 'Layout',
    component: Navbar
}

export const navbar = () => {
    return (
        <Router>
            <Navbar />
        </Router>
    )
}