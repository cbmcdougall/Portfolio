import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Profile } from ".";

export default {
    title: 'Content',
    component: Profile
}

export const profile = () => {
    return (
        <Router>
            <Profile />
        </Router>
    )
}