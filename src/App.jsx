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
import FadeContent from './FadeContent'
import ScrollFadeIn from './components/ScrollFadeIn';


function App() {
  const [count, setCount] = useState(0)
  const general = ['About Me','Outside of Coding','Fun Facts', 'My Skills', 'My Projects', 'Work Experience', 'Education', 'Contact Me', ]
  
  return (
    <main>
      <ScrollFadeIn>
        
      
      <h1 className="text-7xl font-bold">
      <Typewriter
  options={{
    strings: [name],
    autoStart: true,
    cursor: '_',
    pauseFor: 1450000000
  }}
/>
        
      </h1>
      <CompAndRole />
      <p>{whatIdo}</p>
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
