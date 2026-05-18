import React, { useEffect, useRef, useState } from "react";
import workEx from "../data/workExp";
import intoit from "../data/expptwo";

export function CompAndRole() {
  const [index, setIndex] = useState(0);
  const [blurred, setBlurred] = useState(false);
  const skipBlurOnMount = useRef(true);

  useEffect(() => {
    if (workEx.length === 0) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % workEx.length);
    }, 3500);
    return () => clearInterval(id);
  }, [workEx.length]);

  useEffect(() => {
    if (skipBlurOnMount.current) {
      skipBlurOnMount.current = false;
      return;
    }
    setBlurred(true);
    const id = window.setTimeout(() => setBlurred(false), 260);
    return () => window.clearTimeout(id);
  }, [index]);

  if (workEx.length === 0) return null;
  const current = workEx[index];

  return (
    <div
      className={` transition-[filter] duration-200 ease-out ${blurred ? "blur-xs" : ""}`}
    >
      {"Previous "}
      {current.role} @ {current.company}
    </div>
  );
}

export function WorkExp() {
  const [hoveredCompany, setHoveredCompany] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (idx) => {
    setExpandedIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section>
      {workEx.map((comp, idx) => (
        <div
          key={idx}
          className=" bg-[var(--justWhite)] cursor-pointer relative border-2 border-black  bg-[#f7f4ed] px-2 pt-2 recipe-between inside-section"
          onClick={() => handleCardClick(idx)}
          onMouseEnter={() => setHoveredCompany(comp.role)}
          onMouseLeave={() => setHoveredCompany(null)}
        >
          <div className="experience-row">
            {hoveredCompany === comp.role && (
                <span className="experience-arrow-blink">{">"}</span>
              )}
            <h2 className="flex items-center gap-2 reciple-section-xsmall min-w-0 flex-1 cursor-pointer">
              
              {comp.company}
              
            </h2>
            <p className="experience-date shrink-0">{comp.date}</p>
          </div>
          <div className="experience-card-meta">
            <p>{comp.role}</p>
            <p>{comp.location}</p>
          </div>

          <div
            className={`experience-duties-panel ${expandedIndex === idx ? "is-open" : ""}`}
            aria-hidden={expandedIndex !== idx}
          >
            <div className="experience-duties-inner">
              <ul className="experience-duties-list">
                {comp.duties.map((duty, dutyIdx) => (
                  <li key={dutyIdx}>{duty}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
