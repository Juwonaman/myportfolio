import React from 'react';
import skills from '../data/skills';

function Skills(){
    return(
        <section>
            <h2>Skills</h2>
            {skills.map((skill, idx) => <div key = {idx}>
                {skill}
            </div>)}
        </section>
    );
}
export default Skills;