import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Galaxy from './components/Galaxy.jsx'

export default function App() {
  const [galaxyDpr, setGalaxyDpr] = useState(() => (
    window.matchMedia('(max-width: 720px)').matches ? 1 : 1.35
  ))
  const [theme, setTheme] = useState(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme')
    const initialTheme = storedTheme === 'light' || storedTheme === 'dark'
      ? storedTheme
      : window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    document.documentElement.dataset.theme = initialTheme
    return initialTheme
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#080b14' : '#f5f7fb'
    )
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const compactScreen = window.matchMedia('(max-width: 720px)')
    const updateDpr = () => setGalaxyDpr(compactScreen.matches ? 1 : 1.35)
    compactScreen.addEventListener('change', updateDpr)
    return () => compactScreen.removeEventListener('change', updateDpr)
  }, [])

  return (
    <div className="app-shell">
      <div className="galaxy-background" aria-hidden="true">
        <Galaxy
          className="galaxy-scene"
          starColors={['#4287FF', '#42D9FF', '#9475FF', '#FFFFFF']}
          density={0.85}
          glowIntensity={0.3}
          starSize={0.9}
          flareIntensity={0.45}
          twinkleIntensity={0.4}
          starSpeed={0.3}
          speed={0.7}
          rotationSpeed={0.025}
          layers={4}
          direction="forward"
          mouseInteraction
          mouseRepulsion
          repulsionStrength={1.3}
          clickWarp={false}
          intro
          transparent
          lightMode={theme === 'light'}
          opacity={theme === 'light' ? 0.38 : 0.9}
          dpr={galaxyDpr}
        />
      </div>
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
