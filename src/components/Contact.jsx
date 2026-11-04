import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Section from './Section.jsx'
import { profile } from '../data.js'
import { Mail, Github, Linkedin, Send } from '../icons.jsx'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('Sending your message...')

    const form = e.currentTarget

    const formData = {
      from_name: form.name.value,
      from_email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    }

    try {
      await emailjs.send(
        'service_vjvm1pt',
        'template_j0z2puw',
        formData,
        'PVnCfEJG1iTiNG-qf'
      )

      setStatus('Message sent successfully! Thank you for contacting me.')
      form.reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('Sorry! Message could not be sent. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section id="contact" title="Contact" intro="Interested in working together or have a question? Send me a message.">
      <div className="contact-grid">
        <ul className="contact-links">
          <li><a className="glass" href={`mailto:${profile.email}`}><Mail /> {profile.email}</a></li>
          <li><a className="glass" href={profile.github} target="_blank" rel="noopener noreferrer"><Github /> GitHub</a></li>
          <li><a className="glass" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /> LinkedIn</a></li>
        </ul>

        <form className="glass form" onSubmit={submit}>
          <label>Name<input name="name" required autoComplete="name" /></label>
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          <label>Subject<input name="subject" required /></label>
          <label>Message<textarea name="message" rows="5" required /></label>

          <button className="btn" type="submit" disabled={loading}>
            <Send width={18} height={18} />
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          <p className="status" role="status">{status}</p>
        </form>
      </div>
    </Section>
  )
}