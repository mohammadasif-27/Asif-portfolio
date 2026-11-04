import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import GalaxyBackground from './components/GalaxyBackground.jsx'

export default function App() {
  const [theme, setTheme] = useState(() => {
    let initialTheme = 'dark'
    try {
      const storedTheme = window.localStorage.getItem('portfolio-theme-v2')
      if (storedTheme === 'light' || storedTheme === 'dark') initialTheme = storedTheme
    } catch (error) {
      console.warn('Theme preference could not be read from localStorage.', error)
    }
    document.documentElement.dataset.theme = initialTheme
    return initialTheme
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#050816' : '#F8FAFF'
    )
    try {
      window.localStorage.setItem('portfolio-theme-v2', theme)
    } catch (error) {
      console.warn('Theme preference could not be saved to localStorage.', error)
    }
  }, [theme])

  return (
    <div className="app-shell">
      {theme === 'dark' && <GalaxyBackground />}
      <a className="skip" href="#about">Skip to content</a>
      <Navbar theme={theme} onThemeChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
