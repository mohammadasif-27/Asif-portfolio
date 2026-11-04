import React from 'react'
import { nav, profile } from '../data.js'
import { Github, Linkedin, Mail } from '../icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-inner">
        <a href="#home" className="logo">ASIF<span>.DEV</span></a>
        <nav aria-label="Footer">{nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}</nav>
        <div className="social">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  )
}
