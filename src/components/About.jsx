import React from 'react'
import Section from './Section.jsx'
import { profile } from '../data.js'
import { Pin, GradCap } from '../icons.jsx'

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="about-grid">
        <div className="prose">
          <p>I am a Bachelor of Computer Applications student at Shri Maata Degree College, finishing my degree in 2026. I enjoy turning ideas into web applications that are simple to use and work well on any screen.</p>
          <p>My learning started with HTML, CSS and JavaScript. I then moved on to Python and Django for back-end development, PostgreSQL and MySQL for databases, and React for modern interfaces. I use Git and GitHub to manage my work, and AI tools such as GitHub Copilot, ChatGPT and Cursor to learn faster and build more.</p>
          <p>My goal is to start my career as a software or web developer, learn from an experienced team, and keep building useful, user-friendly applications.</p>
        </div>
        <ul className="facts glass">
          <li><GradCap /><span><strong>BCA, 2023 – 2026</strong>Shri Maata Degree College</span></li>
          <li><Pin /><span><strong>Location</strong>{profile.location}</span></li>
        </ul>
      </div>
    </Section>
  )
}
