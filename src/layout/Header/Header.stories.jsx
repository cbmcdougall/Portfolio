import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from ".";
import '../../style.css'

export default {
    title: 'Layout',
    component: Header
}

export const header = () => {
    return (
        <Router>
            <Header />
        </Router>
    )
}