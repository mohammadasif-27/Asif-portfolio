import React, { useState } from 'react'
import { nav, profile } from '../data.js'
import { useActiveSection } from '../hooks.js'
import { Menu, Close, Download, Sun, Moon } from '../icons.jsx'

const ids = nav.map((n) => n.toLowerCase())

export default function Navbar({ theme, onThemeChange }) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="logo" aria-label="ASIF.DEV home">ASIF<span>.DEV</span></a>
        <nav id="menu" className={`links ${open ? 'open' : ''}`} aria-label="Main">
          {nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className={active === n.toLowerCase() ? 'active' : ''}
              aria-current={active === n.toLowerCase() ? 'page' : undefined} onClick={() => setOpen(false)}>{n}</a>
          ))}
          <a className="btn btn-small nav-resume" href={profile.resume} download="Mohammad-Asif-Resume.pdf"><Download width={16} height={16} /> Download Resume</a>
          <button className="theme-toggle" type="button" onClick={onThemeChange} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun /> : <Moon />}
            <span>{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
          </button>
        </nav>
        <div className="nav-controls">
          <button className="theme-toggle nav-theme-toggle" type="button" onClick={onThemeChange} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <button className="burger" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  )
}
