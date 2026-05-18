import contactInfo from '../data/contactMe';

const SOCIAL_LINKS = [
  { id: 'linkedin', label: 'LinkedIn', getHref: (c) => c.linkedin },
  { id: 'github', label: 'GitHub', getHref: (c) => c.github },
  { id: 'instagram', label: 'Instagram', getHref: (c) => c.instagram },
];

function Contact() {
  return (
    <section className="contact-section">
      {contactInfo.map((contact, idx) => (
        <div key={idx} className="contact-block">
          <div className="contact-location-row">
            <p className="contact-location-label">location</p>
            <p className="contact-location-value">{contact.location}</p>
          </div>

          <div className="contact-email-card">
            <p className="contact-prompt">
              <span className="text-[var(--blue)]">$</span> mailto
            </p>
            <a href={`mailto:${contact.email}`} className="contact-email-link">
              {contact.email}
            </a>
          </div>

          <div className="contact-links">
            <a
              href={`mailto:${contact.email}`}
              className="contact-link-btn contact-link-btn-primary"
            >
              Email
            </a>
            {SOCIAL_LINKS.map(({ id, label, getHref }) => {
              const href = getHref(contact);
              if (!href) return null;
              return (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-btn"
                >
                  {label}
                </a>
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
    </section>
  );
}

export default Contact;
