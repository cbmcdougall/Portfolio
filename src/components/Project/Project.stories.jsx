import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Project } from ".";
import placeholder from './placeholder.jpg';

export default {
    title: 'Content',
    component: Project,
}

export const project = args => {
    return (
        <Router>
            <Project {...args} />
        </Router>
    )
}
project.args = {
    projectInfo: {
        title: "Test Project",
        image: placeholder,
        github: "#",
        deploy: "#",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod fuga quia facilis quidem nisi perspiciatis, voluptas id provident odio ex laborum amet accusantium culpa maxime quam odit sequi rerum similique."
    }
}