import schoolLinks from "../data/links";

export function ExperienceLogo({ image, imageAlt, label, linkKey, className = "" }) {
  if (!image) return null;

  const url = linkKey ? schoolLinks[linkKey] : null;
  const img = (
    <img
      src={image}
      alt={imageAlt ?? label}
      className={`experience-logo ${className}`.trim()}
      loading="lazy"
      decoding="async"
    />
  );

  if (!url) {
    return <span className="experience-logo-link">{img}</span>;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="experience-logo-link"
      onClick={(e) => e.stopPropagation()}
      aria-label={`Visit ${label}`}
    >
      {img}
    </a>
  );
}
