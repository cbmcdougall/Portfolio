import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from ".";
import '../../style.css'

export default {
    title: 'Layout',
    component: Footer
}

export const footer = () => {
    return (
        <Router>
            <Footer />
        </Router>
    )
}