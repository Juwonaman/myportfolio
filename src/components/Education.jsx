import React from 'react';
import education from '../data/educationMy';

function Education(){
    return(
        <section>
            <h2 className="recipe-section-title">Education</h2>
            {education.map((edu, idx) => (<div key={idx}>{edu.school} - {edu.location}</div>))}
        </section>
    );
}

export default Education;