import schoolLinks from "../data/links";

export function ExperienceLogo({ image, imageAlt, label, linkKey }) {
  if (!image) return null;

  const url = linkKey ? schoolLinks[linkKey] : null;
  const img = (
    <img
      src={image}
      alt={imageAlt ?? label}
      className="experience-logo"
      loading="lazy"
      decoding="async"
    />
  );

  if (!url) return img;

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
