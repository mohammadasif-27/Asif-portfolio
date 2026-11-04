import React from 'react'
import Section from './Section.jsx'
import Preview from './Preview.jsx'
import { projects } from '../data.js'
import { Github } from '../icons.jsx'

export default function Projects() {
  return (
    <Section id="projects" title="Featured projects" intro="Academic and practice projects I built while learning web development.">
      <div className="grid-2">
        {projects.map((p) => (
          <article className="card glass project" key={p.name}>
            <Preview type={p.preview} title={p.name} />
            <h3>{p.name}</h3>
            <p className="sub">{p.subtitle}</p>
            <p>{p.description}</p>
            <ul className="features">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <ul className="tags">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
            {(p.github || p.live) && (
              <div className="actions">
                {p.github && <a className="btn btn-small btn-ghost" href={p.github} target="_blank" rel="noopener noreferrer"><Github width={16} height={16} /> GitHub</a>}
                {p.live && <a className="btn btn-small" href={p.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
