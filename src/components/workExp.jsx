import React from 'react';
import workEx from '../data/workExp';

export function CompAndRole() {
  return (
    <>
      {workEx.map((exp, index) => (
        <div key={index}>
          {exp.company} @ {exp.role}
        </div>
      ))}
    </>
  );
}

export function WorkExp() {
    return(
        <section>
            <h2>Work Experience</h2>
            <CompAndRole />
            {workEx.map((comp, idx) => <div key = {idx}>
                 <h3>{comp.company}</h3>
                 <p>{comp.role}</p>
                    <p>{comp.date}</p>
                    <p>{comp.location}</p>
                    <ul>
                        {comp.duties.map((duty, idx) => <li key = {idx}>{duty}</li>)}
                    </ul>
                 </div>)}
        </section>
    )
}