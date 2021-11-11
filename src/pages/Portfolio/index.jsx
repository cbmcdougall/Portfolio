import React from "react";
import { Project, Technology } from '../../components';
import { technologies } from '../../assets/technologies.js';
import { projects } from '../../assets/projects.js';
import './style.css';

export const Portfolio = () => {

    const renderTechnologies = () => technologies.map((t, i) => <Technology key={i} data={t} />)
    const renderProjects = () => projects.map((p, i) => <Project key={i} projectInfo={p} />)

    return (
        <main id="portfolio">
            <section id="technologies">
                <h2 className="portfolio-section-header">Known Technologies</h2>
                <div className="portfolio-flex">{renderTechnologies()}</div>
            </section>
            <section id="projects">
                <h2 className="portfolio-section-header">Projects</h2>
                <div className="portfolio-flex">{renderProjects()}</div>
            </section>
        </main>
    )
}