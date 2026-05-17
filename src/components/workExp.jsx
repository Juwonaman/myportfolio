import React, { useEffect, useRef, useState } from "react";
import workEx from "../data/workExp";

/** Duty list used only to reserve height (longest across all roles). */
function getSizingDuties(entries) {
  if (entries.length === 0) return [];
  return entries.reduce(
    (longest, job) =>
      job.duties.join("").length > longest.join("").length ? job.duties : longest,
    entries[0].duties,
  );
}

const sizingDuties = getSizingDuties(workEx);

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
          className="cursor-pointer"
          onClick={() => handleCardClick(idx)}
          onMouseEnter={() => setHoveredCompany(comp.role)}
          onMouseLeave={() => setHoveredCompany(null)}
        >
          <div className="experience-row">
            <h2 className="flex items-center gap-2 reciple-section-xsmall min-w-0 flex-1 cursor-pointer">
              {comp.company}
              {hoveredCompany === comp.role && (
                <span className="experience-arrow-blink">{">"}</span>
              )}
            </h2>
            <p className="experience-date shrink-0">{comp.date}</p>
          </div>
          <p>{comp.role}</p>
          <p>{comp.location}</p>

          <div className="experience-duties-panel" aria-hidden={expandedIndex !== idx}>
            <ul className="experience-duties-sizer" aria-hidden>
              {sizingDuties.map((duty, dutyIdx) => (
                <li key={dutyIdx}>{duty}</li>
              ))}
            </ul>
            <ul
              className={`experience-duties-list ${expandedIndex === idx ? "" : "invisible"}`}
            >
              {comp.duties.map((duty, dutyIdx) => (
                <li key={dutyIdx}>{duty}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
