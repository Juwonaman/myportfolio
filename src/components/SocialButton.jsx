function SocialButton({
  icon,
  iconAlt = '',
  label,
  onClick,
  href,
  variant = 'default',
  appearance = 'default',
  className = '',
}) {
  const isHeader = appearance === 'header';
  const isPrimary = variant === 'primary' && !isHeader;

  let baseClass;
  if (isHeader) {
    baseClass = 'nav-social-btn-header text-stone-900';
  } else if (isPrimary) {
    baseClass = 'my-button text-white';
  } else {
    baseClass = 'my-buttonpt text-black';
  }

  const combinedClass = `nav-social-btn cursor-pointer border-2 border-black shadow-[3px_3px_0px_grey] transition-all ${baseClass} ${className}`.trim();
  const iconClass = isHeader ? 'nav-social-icon nav-social-icon-header' : 'nav-social-icon';

  const content = (
    <>
      <img src={icon} alt={iconAlt} className={iconClass} />
      <span>{label}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClass}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClass}>
      {content}
    </button>
  );
}

export default SocialButton;
