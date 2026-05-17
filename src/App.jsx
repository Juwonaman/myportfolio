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
import PhotoShuffle from './components/photshuffle';


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <main>
      <ScrollFadeIn>
        
      <header className= "recipe-between-title">
        
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
        <button
          type="button"
          onClick={openLinkedIn}
          className="my-button w-fit border-2 border-black px-7 py-0.5 font-medium text-white shadow-[3px_3px_0px_grey] transition-all"
        >
          LinkedIn
        </button>
        <button
          type="button"
          onClick={openGitHub}
          className="my-buttonpt w-fit border-2 border-black px-7 py-0.5 font-medium text-black shadow-[3px_3px_0px_grey] transition-all"
        >
          GitHub
        </button>
        <button 
        type="button"
        onClick={openInstagram}
        className="px-7 py-0.5 border-2 border-black font-medium text-black w-fit transition-all shadow-[3px_3px_0px_grey] my-buttonpt ">
          Instagram
        </button>
        <button
          type="button"
          className=" my-buttonpt w-fit border-2 border-black px-3 py-1.5 font-medium text-black shadow-[3px_3px_0px_grey] transition-all"
        >
          G
        </button>
      </div>
    </div>
      <CompAndRole/></header>





      <section className="relative border-2 border-black  bg-[#f7f4ed] px-4 pt-8 recipe-between inside-section">
        <span className="absolute left-26 top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-[#f7f4ed] px-4 font-mono italic">cat ~/forvisitors.md</span>
        
        
        <div className="visitor-content">
          <span className="max-w-2xl min-w-0">
            Hi I am Juwon, a CS graduate from KSU, a {whatIdo}
          </span>
          <button
            type="button"
            onClick={openResume}
            className="my-buttonpt ml-auto w-fit shrink-0 border-2 border-black px-7 py-0.5 font-medium text-black shadow-[3px_3px_0px_grey] transition-all"
          >
            Resume
          </button>
        </div>
      </section>


      <section className="relative border-2 border-black bg-[#f7f4ed] px-4 pt-8 recipe-between inside-section ">
        <span className="absolute left-16 top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-[#f7f4ed] px-4 font-mono italic">
          whoami
        </span>
        <div className="whoami-row">
          <div className="max-w-2xl min-w-0 flex-1">
            <AboutMe />
          </div>
          <PhotoShuffle />
        </div>
      </section>

      <section className="relative border-2 border-black  bg-[#f7f4ed] px-4 pt-8 recipe-between inside-section">
      <span className="absolute left-29 top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-[#f7f4ed] px-4 font-mono italic">cat ~/education.md</span>

     
      <Education />
      </section>

      <section className="relative border-2 border-black  bg-[#f7f4ed] px-4 pt-8 recipe-between inside-section">
      <span className="absolute left-29 top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-[#f7f4ed] px-4 font-mono italic">ls ~/skills.md</span>

     
      <Skills />
       </section>

       <section className="relative border-2 border-black  bg-[#f7f4ed] px-4 pt-8 recipe-between inside-section">
      <span className="absolute left-29 top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-[#f7f4ed] px-4 font-mono italic">cat ~/workExperience.md</span>

      <WorkExp />
       </section>

       <section className="relative border-2 border-black  bg-[#f7f4ed] px-4 pt-8 recipe-between inside-section">
      <span className="absolute left-29 top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-[#f7f4ed] px-4 font-mono italic">ls ~/projects.md</span>

      <Projects />       </section>

      </ScrollFadeIn>
    </main>
  )
}

export default App
