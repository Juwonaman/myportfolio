import { useState } from "react";
import projects from "../data/projects";
import { useArrowCard } from "../context/ArrowNavContext";

function ProjectCard({
  project,
  expandedKey,
  onCardClick,
  hoveredTitle,
  onHover,
  onButtonClick,
}) {
  const cardKey = project.id;
  const isExpanded = expandedKey === cardKey;
  const isHovered = hoveredTitle === cardKey;

  const arrowNav = useArrowCard(`project-${cardKey}`, {
    onActivate: () => onCardClick(cardKey),
  });
  const showArrow = arrowNav.isFocused || isHovered;

  return (
    <div
      ref={arrowNav.ref}
      tabIndex={arrowNav.tabIndex}
      role="button"
      aria-expanded={isExpanded}
      className={`inside-section arrow-nav-card relative cursor-pointer border-2 border-black bg-[var(--justWhite)] px-2 pt-2 pb-2 ${arrowNav.className}`}
      onClick={() => onCardClick(cardKey)}
      onFocus={arrowNav.onFocus}
      onKeyDown={arrowNav.onKeyDown}
      onMouseEnter={() => onHover(cardKey)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="experience-row">
        <h2 className="reciple-section-xsmall flex min-w-0 flex-1 items-center gap-2">
          {showArrow && (
            <span className="experience-arrow-blink">{">"}</span>
          )}
          {project.title}
        </h2>
      </div>
      <p className="mt-1 leading-snug">{project.description}</p>

      <div className="experience-row items-start gap-2 mt-2">
        <div
          className="flex shrink-0 flex-wrap gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          {project.buttons?.map((button, btnIdx) => (
            <button
              key={btnIdx}
              type="button"
              onClick={(e) => onButtonClick(e, button)}
              className="my-buttonpt w-fit shrink-0 cursor-pointer border-2 border-black px-7 py-0.5 font-medium text-black shadow-[3px_3px_0px_grey] transition-all"
            >
              {button.label}
            </button>
          ))}
        </div>
        <div
          className={`experience-duties-panel project-stack-panel min-w-0 flex-1 ${isExpanded ? "is-open" : ""}`}
          aria-hidden={!isExpanded}
        >
          <ul className="experience-duties-chips">
            {project.stack.map((tech, techIdx) => (
              <li key={techIdx}>
                <span className="experience-skill-chip">{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const [expandedKey, setExpandedKey] = useState(null);

  const handleCardClick = (key) => {
    setExpandedKey((current) => (current === key ? null : key));
  };

  const handleButtonClick = (e, button) => {
    e.stopPropagation();
    if (!button.url) return;
    window.open(button.url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="flex flex-col gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          expandedKey={expandedKey}
          onCardClick={handleCardClick}
          hoveredTitle={hoveredTitle}
          onHover={setHoveredTitle}
          onButtonClick={handleButtonClick}
        />
      ))}
    </section>
  );
}
