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

function App() {
  const [count, setCount] = useState(0)
  const general = ['About Me','Outside of Coding','Fun Facts', 'My Skills', 'My Projects', 'Work Experience', 'Education', 'Contact Me', ]
  
  return (
    <main>
      <h1>
        {name}
      </h1>
      <p>{whatIdo}</p>
      <CompAndRole />
      <AboutMe />
      <FunFact />
      <Education />
      <Skills />
      <WorkExp />
      <Projects />
    </main>
  )
}

export default App
