import React from "react";
import { Project, Technology } from '../../components';
import { shuffle } from "../../assets/helpers";
import { technologies } from '../../assets/technologies.js';
import { projects } from '../../assets/projects.js';
import './style.css';

export const Portfolio = () => {

    const renderTechnologies = () => shuffle(technologies).map((t, i) => <Technology key={i} data={t} />)
    const renderProjects = () => shuffle(projects).map((p, i) => <Project key={i} projectInfo={p} />)

    return (
        <main id="portfolio">
            <section id="technologies">
                <div className="portfolio-section-heading">
                    <h2 className="portfolio-section-header">Known Technologies</h2>
                </div>
                <div className="portfolio-flex">{renderTechnologies()}</div>
            </section>
            <section id="projects">
                <div className="portfolio-section-heading">
                    <h2 className="portfolio-section-header">Projects</h2>
                </div>
                <div className="portfolio-flex">{renderProjects()}</div>
            </section>
        </main>
    )
}