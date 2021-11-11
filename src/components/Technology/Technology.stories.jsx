import React from "react";
import { Technology } from ".";
import placeholder from '../../assets/placeholder.jpg';
import './style.css';

export default {
    title: 'Content',
    component: Technology,
}

export const technology = args => <Technology {...args} />
technology.args = {
    data: {
        title: "Test Technology",
        image: placeholder,
    }
}