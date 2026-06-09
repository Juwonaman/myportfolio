import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import { whatIdo } from './data/aboutMe';
import {name} from './data/aboutMe';
import { WorkExp, CompAndRole } from './components/workExp';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Typewriter from 'typewriter-effect';
import ScrollFadeIn from './components/ScrollFadeIn';
import { openGitHub, openInstagram, openLinkedIn, openResume } from './components/buttonTask';
import SocialButton from './components/SocialButton';
import socialButtons from './data/socialButtons';
import PhotoShuffle from './components/photshuffle';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import { ArrowNavProvider } from './context/ArrowNavContext';

const NAV_SOCIAL_ACTIONS = {
  linkedin: openLinkedIn,
  github: openGitHub,
  instagram: openInstagram,
};


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <main>
      <ArrowNavProvider>
      <ScrollFadeIn>
        
      <header className="recipe-between-title inside-section">
        
    <div className="hero-name-row">
      
      <h1 className="min-w-0 shrink text-3xl font-bold">
        
      <Typewriter
  options={{
    strings: [name],
    autoStart: true,
    cursor: '_',
    pauseFor: 1450000000
  }}/>      </h1>
  
      <div className="to-right">
        {socialButtons.map(({ id, label, icon, iconAlt, variant }) => (
          <SocialButton
            key={id}
            icon={icon}
            iconAlt={iconAlt}
            label={label}
            variant={variant}
            appearance="header"
            onClick={NAV_SOCIAL_ACTIONS[id]}
          />
        ))}
        <ThemeToggle />
      </div>
    </div>
      <CompAndRole/></header>

      <section className="recipe-section">
        <span className="recipe-section-label">cat ~/forvisitors.md</span>
        <div className="visitor-content">
          <span className="visitor-intro max-w-2xl min-w-0">
            Hi I am Juwon, a CS graduate from KSU, a {whatIdo}
          </span>
          <button
            type="button"
            onClick={openResume}
            className="cursor-pointer my-buttonpt ml-auto w-fit max-w-full shrink-0 border-2 border-[var(--border-strong)] px-4 py-0.5 font-medium shadow-[3px_3px_0px_grey] transition-all sm:px-7"
          >
            Resume
          </button>
        </div>
      </section>

      <section className="recipe-section whoami-section">
        <span className="recipe-section-label">whoami</span>
        <div className="whoami-body">
          <div className="whoami-main">
            <div className="whoami-about max-w-2xl min-w-0">
              <AboutMe />
            </div>
            <blockquote className="whoami-quote">
              <p className="whoami-quote-text">
                “A ship in harbor is safe, but that is not what ships are built for.”
              </p>
              <footer className="whoami-quote-author">— John A. Shedd</footer>
            </blockquote>
          </div>
          <PhotoShuffle />
        </div>
      </section>

      <section className="recipe-section">
        <span className="recipe-section-label">cat ~/workExperience.md</span>
        <span className="dep">the professional part of this</span>
        <WorkExp />
      </section>

      <section className="recipe-section">
        <span className="recipe-section-label">cat ~/education.md</span>
        <Education />
      </section>

      <section className="recipe-section">
        <span className="recipe-section-label">ls ~/skills.md</span>
        <Skills />
      </section>

      <section className="recipe-section">
        <span className="recipe-section-label">ls ~/projects.md</span>
        <span className="dep">a few things I have worked on</span>
        <Projects />
      </section>

      <section className="recipe-section">
        <span className="recipe-section-label">ls ~/contact.md</span>
        <Contact />
      </section>

      </ScrollFadeIn>
      </ArrowNavProvider>
    </main>
  )
}

export default App
