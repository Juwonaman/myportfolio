import { useState } from "react";
import projects from "../data/projects";
import { useArrowCard } from "../context/ArrowNavContext";
import { ExperienceLogo } from "./ExperienceLogo";

function ProjectCard({
  project,
  onCardActivate,
  hoveredTitle,
  onHover,
  onButtonClick,
}) {
  const cardKey = project.id;
  const isHovered = hoveredTitle === cardKey;

  const arrowNav = useArrowCard(`project-${cardKey}`, {
    onActivate: () => onCardActivate(project),
  });
  const showArrow = arrowNav.isFocused || isHovered;

  return (
    <div
      ref={arrowNav.ref}
      tabIndex={arrowNav.tabIndex}
      role="button"
      aria-label={`Open ${project.title} on GitHub`}
      className={`inside-section arrow-nav-card relative cursor-pointer border-2 border-[var(--border-inner)] bg-[var(--justWhite)] px-2 pt-2 pb-2 ${arrowNav.className}`}
      onClick={() => onCardActivate(project)}
      onFocus={arrowNav.onFocus}
      onKeyDown={arrowNav.onKeyDown}
      onMouseEnter={() => onHover(cardKey)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="experience-row">
        
          
        <h2 className="reciple-section-xsmall flex min-w-0 flex-1 items-center gap-2">
          {showArrow && (
            <span className="experience-arrow-blink">{">"}</span>
          )}<ExperienceLogo image = {project.image}
          imageAlt = {project.imageAlt} />
          {project.title}
        </h2>
      </div>
      <p className="project-description">{project.description}</p>

      <div className="card-actions-row experience-row items-start gap-2">
        <div
          className="experience-duties-panel project-stack-panel min-w-0 flex-1 is-open"
          aria-hidden="false"
        >
          <ul className="experience-duties-chips experience-duties-chips-start">
            {project.stack.map((tech, techIdx) => (
              <li key={techIdx}>
                <span className="experience-skill-chip">{tech}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="card-actions-buttons ml-auto flex shrink-0 flex-wrap gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          {project.buttons?.map((button, btnIdx) => (
            <button
              key={btnIdx}
              type="button"
              onClick={(e) => onButtonClick(e, button)}
              className="my-buttonpt w-fit max-w-full shrink-0 cursor-pointer border-2 border-[var(--border-strong)] px-4 py-0.5 font-medium shadow-[3px_3px_0px_grey] transition-all sm:px-7"
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [hoveredTitle, setHoveredTitle] = useState(null);

  const getGitHubButton = (project) => {
    return project.buttons?.find((button) => button.label === "GitHub");
  };

  const handleCardActivate = (project) => {
    const githubButton = getGitHubButton(project);
    if (!githubButton?.url) return;
    window.open(githubButton.url, "_blank", "noopener,noreferrer");
  };

  const handleButtonClick = (e, button) => {
    e.stopPropagation();
    if (!button.url) return;
    window.open(button.url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="flex flex-col gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onCardActivate={handleCardActivate}
          hoveredTitle={hoveredTitle}
          onHover={setHoveredTitle}
          onButtonClick={handleButtonClick}
        />
      ))}
    </section>
  );
}
