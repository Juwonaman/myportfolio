import React from 'react';
import projects from '../data/projects';
function displayProj() {
    return (
        <section>
        {projects.map((project, idx) => <div key = {idx}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.stack}</p>
        </div>)}
        </section>
    );
}
export default displayProj;