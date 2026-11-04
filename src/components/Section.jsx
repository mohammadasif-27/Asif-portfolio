import React from 'react'
import { useReveal } from '../hooks.js'

export default function Section({ id, title, intro, children }) {
  const ref = useReveal()
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container reveal" ref={ref}>
        <h2 id={`${id}-title`} className="section-title">{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
