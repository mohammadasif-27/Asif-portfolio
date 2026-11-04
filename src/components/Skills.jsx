import React from 'react'
import Section from './Section.jsx'
import { skills } from '../data.js'
import { Code, Layers, Server, Database, Wrench, Sparkles } from '../icons.jsx'

const icons = { 'Programming Languages': Code, 'Frontend Development': Layers, 'Backend Development': Server, Database, 'Tools & Platforms': Wrench, 'AI Tools': Sparkles }

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills" intro="The tools and technologies I have learned and used in my projects.">
      <div className="grid-3">
        {skills.map((s) => {
          const Icon = icons[s.title] || Code
          return (
            <article className="card glass" key={s.title}>
              <div className="icon-box"><Icon /></div>
              <h3>{s.title}</h3>
              <ul className="tags">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
