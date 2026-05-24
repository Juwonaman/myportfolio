import { useState } from 'react';
import contactInfo from '../data/contactMe';
import socialButtons from '../data/socialButtons';
import { useArrowCard } from '../context/ArrowNavContext';
import SocialButton from './SocialButton';

const CONTACT_HREF_KEYS = {
  linkedin: 'linkedin',
  github: 'github',
  instagram: 'instagram',
};

function openEmail(email) {
  window.location.href = `mailto:${email}`;
}

function ContactEmailCard({ contact, idx }) {
  const [hovered, setHovered] = useState(false);
  const arrowNav = useArrowCard(`contact-email-${idx}`, {
    onActivate: () => openEmail(contact.email),
  });
  const showArrow = arrowNav.isFocused || hovered;

  return (
    <div
      ref={arrowNav.ref}
      tabIndex={arrowNav.tabIndex}
      role="button"
      aria-label={`Email ${contact.email}`}
      className={`contact-email-card arrow-nav-card cursor-pointer ${arrowNav.className}`}
      onClick={() => openEmail(contact.email)}
      onFocus={arrowNav.onFocus}
      onKeyDown={arrowNav.onKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className="contact-prompt">
        <span className="text-[var(--blue)]">$</span> mailto
      </p>
      <p className="contact-email-row">
        {showArrow && (
          <span className="experience-arrow-blink shrink-0">{">"}</span>
        )}
        <span className="contact-email-link">{contact.email}</span>
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact-section">
      {contactInfo.map((contact, idx) => (
        <div key={idx} className="contact-block">
          <div className="contact-location-row">
            <p className="contact-location-label">my contact info</p>
            <p className="contact-location-value">{contact.location}</p>
          </div>

          <ContactEmailCard contact={contact} idx={idx} />

          <div className="contact-links">
            <a
              href={`mailto:${contact.email}`}
              className="contact-link-btn contact-link-btn-primary"
            >
              Email
            </a>
            {socialButtons.map(({ id, label, icon, iconAlt, variant }) => {
              const href = contact[CONTACT_HREF_KEYS[id]];
              if (!href) return null;
              return (
                <SocialButton
                  key={id}
                  icon={icon}
                  iconAlt={iconAlt}
                  label={label}
                  variant={variant}
                  href={href}
                  className={
                    variant === 'primary'
                      ? 'contact-link-btn contact-link-btn-primary'
                      : 'contact-link-btn'
                  }
                />
              );
            })}
            {contact.resume && (
              <a
                href={contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-btn"
              >
                Resume
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contact;
