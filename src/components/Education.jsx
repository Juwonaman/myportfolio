import { useState } from 'react';
import education from '../data/educationMy';
import schoolLinks from '../data/links';

function Education() {
  const [hoveredEducation, setHoveredEducation] = useState(null);

  const handleClick = (linkKey) => {
    const url = schoolLinks[linkKey];
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      {education.map((edu, idx) => {
        const hasLink = Boolean(edu.linkKey && schoolLinks[edu.linkKey]);

        return (
          <div
            key={edu.school ?? idx}
            role={hasLink ? 'link' : undefined}
            tabIndex={hasLink ? 0 : undefined}
            onClick={hasLink ? () => handleClick(edu.linkKey) : undefined}
            onKeyDown={
              hasLink
                ? (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleClick(edu.linkKey);
                    }
                  }
                : undefined
            }
            onMouseEnter={() => setHoveredEducation(edu.school)}
            onMouseLeave={() => setHoveredEducation(null)}
            className={`inside-section relative border-2 border-black bg-[var(--justWhite)] px-2 pt-2 pb-2 recipe-between-education ${
              hasLink ? 'cursor-pointer' : ''
            }`}
          >
            <div className="education-row">
              <h2 className="reciple-section-xsmall flex min-w-0 flex-1 items-center gap-2">
                {hoveredEducation === edu.school && hasLink && (
                  <span className="experience-arrow-blink">{">"}</span>
                )}
                {edu.school}
              </h2>
              <p className="education-date shrink-0">{edu.date}</p>
            </div>
            <h3>{edu.degree}</h3>
            <p>GPA: {edu.gpa}</p>
            {edu.certs ? <p>{edu.certs}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

export default Education;
