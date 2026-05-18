import React, { useEffect, useRef, useState } from "react";
import workEx from "../data/workExp";
import schoolLinks from "../data/links";
import { useArrowCard } from "../context/ArrowNavContext";

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
      className={`transition-[filter] duration-200 ease-out ${blurred ? "blur-xs" : ""}`}
    >
      {"Previous "}
      {current.role ?? current.positions?.[0]?.role} @ {current.company}
    </div>
  );
}

function WorkExpCard({
  comp,
  idx,
  hoverKey,
  hoveredCompany,
  setHoveredCompany,
  expandedIndex,
  onCardClick,
  onCompanyClick,
}) {
  const arrowNav = useArrowCard(`work-${idx}`, {
    onActivate: () => onCardClick(idx),
  });
  const showArrow = arrowNav.isFocused || hoveredCompany === hoverKey;

  return (
    <div
      ref={arrowNav.ref}
      tabIndex={arrowNav.tabIndex}
      role="button"
      aria-expanded={expandedIndex === idx}
      className={`inside-section arrow-nav-card relative cursor-pointer border-2 border-black bg-[var(--justWhite)] px-2 pt-2 recipe-between-education ${arrowNav.className}`}
      onClick={() => onCardClick(idx)}
      onFocus={arrowNav.onFocus}
      onKeyDown={arrowNav.onKeyDown}
      onMouseEnter={() => setHoveredCompany(hoverKey)}
      onMouseLeave={() => setHoveredCompany(null)}
    >
      <div
        className={`experience-row ${comp.linkKey === "union" ? "experience-title-divided" : ""}`}
      >
        <h2 className="reciple-section-xsmall flex min-w-0 flex-1 items-center gap-2">
          {showArrow && <span className="experience-arrow-blink">{">"}</span>}
          {comp.company}
        </h2>
      </div>

      {comp.positions?.length ? (
        <div className="experience-positions">
          {comp.positions.map((pos, posIdx) => (
            <div key={posIdx} className="experience-position">
              <div className="experience-row">
                <p className="min-w-0 flex-1 font-medium">{pos.role}</p>
                <p className="experience-date shrink-0">{pos.date}</p>
              </div>
              <p>{pos.location}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="experience-card-body">
          <div className="experience-card-meta">
            <p>{comp.role}</p>
          </div>
          <p>{comp.location}</p>
        </div>
      )}

      <div className="experience-row items-start gap-2">
        <div
          className={`experience-duties-panel ${expandedIndex === idx ? "is-open" : ""}`}
          aria-hidden={expandedIndex !== idx}
        >
          <ul className="experience-duties-chips experience-duties-chips-start">
            {comp.duties.map((duty, dutyIdx) => (
              <li key={dutyIdx}>
                <span className="experience-skill-chip">{duty}</span>
              </li>
            ))}
          </ul>
        </div>
        {comp.linkKey && schoolLinks[comp.linkKey] && (
          <button
            type="button"
            onClick={(e) => onCompanyClick(e, comp.linkKey)}
            className="my-buttonpt ml-auto w-fit shrink-0 cursor-pointer border-2 border-black px-7 py-0.5 font-medium text-black shadow-[3px_3px_0px_grey] transition-all"
          >
            {comp.buttonLabel ?? "Company"}
          </button>
        )}
      </div>
    </div>
  );
}

export function WorkExp() {
  const [hoveredCompany, setHoveredCompany] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (idx) => {
    setExpandedIndex((current) => (current === idx ? null : idx));
  };

  const handleCompanyClick = (e, linkKey) => {
    e.stopPropagation();
    const url = schoolLinks[linkKey];
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section>
      {workEx.map((comp, idx) => {
        const hoverKey = comp.positions?.length ? comp.company : comp.role;

        return (
          <WorkExpCard
            key={idx}
            comp={comp}
            idx={idx}
            hoverKey={hoverKey}
            hoveredCompany={hoveredCompany}
            setHoveredCompany={setHoveredCompany}
            expandedIndex={expandedIndex}
            onCardClick={handleCardClick}
            onCompanyClick={handleCompanyClick}
          />
        );
      })}
    </section>
  );
}
