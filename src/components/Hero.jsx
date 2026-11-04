import React from 'react'
import { profile } from '../data.js'
import { Github, Linkedin, Download } from '../icons.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hello">Hello, I'm</p>
          <h1>{profile.name}</h1>
          <p className="roles">Aspiring Web Developer | React Developer | Python Developer</p>
          <p className="lead">
            I'm a BCA student who enjoys building responsive web applications. I work with React on the front end and Python with Django on the back end, and I'm looking for an entry-level software or web development role.
          </p>
          <div className="actions">
            <a className="btn" href="#projects">View My Projects</a>
            <a className="btn btn-ghost" href={profile.resume} download="Mohammad-Asif-Resume.pdf"><Download width={18} height={18} /> Download Resume</a>
          </div>
          <div className="social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin /></a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="chip c1">React</div>
          <div className="chip c2">Django</div>
          <div className="chip c3">Python</div>
          <div className="chip c4">PostgreSQL</div>
          <div className="code-window">
            <div className="dots"><i /><i /><i /></div>
            <pre>{`const asif = {
  education: "BCA",
  frontend: ["HTML", "CSS", "React"],
  backend: ["Python", "Django"],
  database: ["PostgreSQL", "MySQL"],
  lookingFor: "Entry-level role",
};`}</pre>
          </div>
        </div>
      </div>
    </section>
  )
}
