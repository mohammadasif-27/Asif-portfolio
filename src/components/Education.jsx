import React from 'react'
import Section from './Section.jsx'
import { education, certifications } from '../data.js'
import { Award } from '../icons.jsx'

export default function Education() {
  return (
    <Section id="education" title="Education & certifications">
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.title} className="glass">
            <time>{e.period}</time>
            <h3>{e.title}</h3>
            <p>{e.place}</p>
            <p className="score">{e.score}</p>
          </li>
        ))}
      </ol>
      <h3 className="subhead">Certifications</h3>
      <div className="grid-2">
        {certifications.map((c) => (
          <article key={c.title} className="card glass cert">
            <div className="icon-box"><Award /></div>
            <div>
              <h3>{c.title}</h3>
              <p className="sub">{c.issuer} · {c.date}</p>
              <p>{c.note}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
