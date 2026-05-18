import React from 'react';
import aboutMe from '../data/aboutMe';

function AboutMe() {
  return (
    <section className="about-me-prose">
      {aboutMe.map((paragraph, idx) => (
        <p key={idx} className="about-me-paragraph">
          {typeof paragraph === 'string'
            ? paragraph
            : paragraph.map((chunk, chunkIdx) =>
                chunk.href ? (
                  <a
                    key={chunkIdx}
                    href={chunk.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {chunk.text}
                  </a>
                ) : (
                  <span key={chunkIdx}>{chunk.text}</span>
                )
              )}
        </p>
      ))}
    </section>
  );
}

export default AboutMe;
