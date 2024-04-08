import { useState } from 'react'

import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/HomePage/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App