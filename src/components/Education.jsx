import React from 'react';
import education from '../data/educationMy';

function Education() {
  return (
    <div>
      {education.map((edu, idx) => (
        <div key={edu.school ?? idx} className="inside-section pb-8 last:pb-0">
          <div className="education-row">
            <h2 className="reciple-section-xsmall min-w-0 flex-1">{edu.school}</h2>
            <p className="education-date shrink-0">{edu.date}</p>
          </div>
          <h3 className="">{edu.degree}</h3>
          <p>GPA: {edu.gpa}</p>
          <p>{edu.certs}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;
