import React from 'react';
import aboutMe from '../data/aboutMe';

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      {aboutMe.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
    </section>
  );
}

export default AboutMe;
