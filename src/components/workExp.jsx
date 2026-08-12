import React, { useEffect, useRef, useState } from "react";
import workEx from "../data/workExp";
import schoolLinks from "../data/links";
import { useArrowCard } from "../context/ArrowNavContext";
import { ExperienceLogo } from "./ExperienceLogo";

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
      className={`mt-2 transition-[filter] duration-200 ease-out ${blurred ? "blur-xs" : ""}`}
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
      className={`inside-section arrow-nav-card relative cursor-pointer border-2 border-[var(--border-inner)] bg-[var(--justWhite)] px-2 pt-2 pb-2 ${arrowNav.className}`}
      onClick={() => onCardClick(idx)}
      onFocus={arrowNav.onFocus}
      onKeyDown={arrowNav.onKeyDown}
      onMouseEnter={() => setHoveredCompany(hoverKey)}
      onMouseLeave={() => setHoveredCompany(null)}
    >
      <div className="experience-card-inner">
        <ExperienceLogo
          image={comp.image}
          imageAlt={comp.imageAlt}
          label={comp.company}
          linkKey={comp.logoLinkKey}
        />
        <div className="experience-card-content">
      <div className="experience-row experience-title-divided">
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
                <p className="min-w-0 flex-1 font-bold">{pos.role}</p>
                <p className="experience-date">{pos.date}</p>
              </div>
              <p className="text-stone-500">{pos.location}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="experience-card-body">
          <div className="experience-row">
            <p className="min-w-0 flex-1 font-bold">{comp.role}</p>
            {comp.date && <p className="experience-date">{comp.date}</p>}
          </div>
          <p className="text-stone-500">{comp.location}</p>
        </div>
      )}

      <div className="card-actions-row experience-row items-start gap-2">
  {comp.duties?.filter(Boolean).length > 0 && (
    <div
      className={`experience-duties-panel ${
        expandedIndex === idx ? "is-open" : ""
      }`}
      aria-hidden={expandedIndex !== idx}
    >
      <ul className="experience-duties-chips experience-duties-chips-start">
        {comp.duties.filter(Boolean).map((duty, dutyIdx) => (
          <li key={dutyIdx}>
            <span className="experience-skill-chip">{duty}</span>
          </li>
        ))}
      </ul>
    </div>
  )}

  {comp.linkKey && schoolLinks[comp.linkKey] && (
    <button
      type="button"
      onClick={(e) => onCompanyClick(e, comp)}
      className="my-buttonpt ml-auto w-fit max-w-full shrink-0 cursor-pointer border-2 border-[var(--border-strong)] px-4 py-0.5 font-medium shadow-[3px_3px_0px_grey] transition-all sm:px-7"
    >
      {comp.buttonLabel ?? "Company"}
    </button>
  )}
</div>
        </div>
      </div>
    </div>
  );
}

function WorkPicturesModal({ company, pictures = [], onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="experience-picture-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <section
        className="experience-picture-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${company} pictures`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="experience-picture-close my-buttonpt cursor-pointer border-2 border-[var(--border-strong)] px-3 py-0.5 font-medium shadow-[3px_3px_0px_grey] transition-all"
          onClick={onClose}
          aria-label="Close pictures"
        >
          x
        </button>

        {pictures.length ? (
          <div className="experience-picture-grid">
            {pictures.map((picture, pictureIdx) => (
              <article key={pictureIdx} className="experience-picture-card">
                <img
                  src={picture.src}
                  alt={picture.alt ?? `${company} picture ${pictureIdx + 1}`}
                  className="experience-picture"
                  loading="lazy"
                  decoding="async"
                />
                <p className="experience-picture-description">
                  {picture.description}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="experience-picture-empty">
            Add your pictures to this experience entry and they will show here.
          </div>
        )}
      </section>
    </div>
  );
}

export function WorkExp() {
  const [hoveredCompany, setHoveredCompany] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [pictureModalCompany, setPictureModalCompany] = useState(null);

  const handleCardClick = (idx) => {
    setExpandedIndex((current) => (current === idx ? null : idx));
  };

  const handleCompanyClick = (e, comp) => {
    e.stopPropagation();
    if (comp.buttonLabel === "Pictures") {
      setPictureModalCompany(comp);
      return;
    }

    const linkKey = comp.linkKey;
    const url = schoolLinks[linkKey];
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="flex flex-col gap-4">
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

      {pictureModalCompany && (
        <WorkPicturesModal
          company={pictureModalCompany.company}
          pictures={pictureModalCompany.pictures}
          onClose={() => setPictureModalCompany(null)}
        />
      )}
    </>
  );
}
