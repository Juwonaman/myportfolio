import { useState } from "react";
import education from "../data/educationMy";
import schoolLinks from "../data/links";
import { useArrowCard } from "../context/ArrowNavContext";

function EducationCard({ edu, idx }) {
  const [hoveredEducation, setHoveredEducation] = useState(false);
  const hasLink = Boolean(edu.linkKey && schoolLinks[edu.linkKey]);

  const handleClick = () => {
    const url = schoolLinks[edu.linkKey];
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const arrowNav = useArrowCard(`education-${idx}`, {
    onActivate: handleClick,
    enabled: hasLink,
  });
  const showArrow = hasLink && (arrowNav.isFocused || hoveredEducation);

  return (
    <div
      ref={hasLink ? arrowNav.ref : undefined}
      tabIndex={hasLink ? arrowNav.tabIndex : undefined}
      role={hasLink ? "button" : undefined}
      onClick={hasLink ? handleClick : undefined}
      onFocus={hasLink ? arrowNav.onFocus : undefined}
      onKeyDown={hasLink ? arrowNav.onKeyDown : undefined}
      onMouseEnter={() => setHoveredEducation(true)}
      onMouseLeave={() => setHoveredEducation(false)}
      className={`inside-section relative border-2 border-stone-400 bg-[var(--justWhite)] px-2 pt-2 pb-2 ${
        hasLink ? `cursor-pointer arrow-nav-card ${arrowNav.className}` : ""
      }`}
    >
      <div className="experience-card-inner">
        {edu.image && (
          <img
            src={edu.image}
            alt={edu.imageAlt ?? edu.school}
            className="experience-logo"
          />
        )}
        <div className="experience-card-content">
          <div className="education-row">
            <h2 className="reciple-section-xsmall flex min-w-0 flex-1 items-center gap-2">
              {showArrow && <span className="experience-arrow-blink">{">"}</span>}
              {edu.school}
            </h2>
            <p className="education-date shrink-0">{edu.date}</p>
          </div>
          <h3>{edu.degree}</h3>
          <p>GPA: {edu.gpa}</p>
          {edu.certs ? <p>{edu.certs}</p> : null}
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="flex flex-col gap-4">
      {education.map((edu, idx) => (
        <EducationCard key={edu.school ?? idx} edu={edu} idx={idx} />
      ))}
    </div>
  );
}

export default Education;
