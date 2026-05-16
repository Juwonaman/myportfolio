import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import { whatIdo } from './data/aboutMe';
import {name} from './data/aboutMe';
import FunFact from './components/Funfact'
import { WorkExp, CompAndRole } from './components/workExp';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Typewriter from 'typewriter-effect';
import ScrollFadeIn from './components/ScrollFadeIn';


function App() {
  const [count, setCount] = useState(0)
  const general = ['About Me','Outside of Coding','Fun Facts', 'My Skills', 'My Projects', 'Work Experience', 'Education', 'Contact Me', ]
  
  return (
    <main>
      <ScrollFadeIn>
        
    <header className = "recipe-middle-format ">
      <h1 className="text-8xl font-bold">
      <Typewriter
  options={{
    strings: [name],
    autoStart: true,
    cursor: '_',
    pauseFor: 1450000000
  }}/>
  
      </h1>
      <section className = "border-2 border-black shadow-[6px_6px_0px_#777] bg-[#f7f4ed] px-4">
        <span className =" absolute -top-1 left-2 bg-[#f7f4ed] px-4">cat ~/introduction.md</span>
      <CompAndRole/>
      <p>{whatIdo}</p>
      </section>
      </header>

      <AboutMe />
      <FunFact />
      <Education />
      <Skills />
      <WorkExp />
      <Projects /></ScrollFadeIn>
    </main>
  )
}

export default App
