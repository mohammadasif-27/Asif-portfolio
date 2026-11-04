// Edit this file to change your details. Everything shown on the site comes from here.
export const profile = {
  name: 'Mohammad Asif',
  location: 'Sandur, Karnataka, India',
  email: 'mohammad.asif2005a@gmail.com',
  github: 'https://github.com/mohammadasif-27',
  linkedin: 'https://www.linkedin.com/in/mohammad-asif-3b6130400',
  resume: './resume.pdf',
}

export const nav = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact']

export const skills = [
  { title: 'Programming Languages', items: ['Python', 'JavaScript'] },
  { title: 'Frontend Development', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Web Design'] },
  { title: 'Backend Development', items: ['Django'] },
  { title: 'Database', items: ['PostgreSQL', 'MySQL'] },
  { title: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'MS Office'] },
  { title: 'AI Tools', items: ['GitHub Copilot', 'ChatGPT', 'Cursor'] },
]

// Add a project's `github` or `live` link only when you have a real URL.
export const projects = [
  {
    name: 'CafeHub',
    subtitle: 'Cafe Management Web Application',
    description: 'A full-stack web application for running a cafe, built with Django and PostgreSQL.',
    tech: ['Python', 'Django', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    features: ['Customer ordering', 'Menu management', 'Database-driven features', 'Responsive interface'],
    github: '',
    live: '',
    preview: 'cafe',
  },
  {
    name: 'Home Service Web App',
    subtitle: 'Service booking platform',
    description: 'A platform where users choose a home service and book a worker online.',
    tech: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript'],
    features: ['Home service selection', 'Worker booking workflow', 'Django backend'],
    github: '',
    live: '',
    preview: 'service',
  },
  {
    name: 'Amazon Clone Website',
    subtitle: 'Responsive e-commerce front end',
    description: 'A responsive e-commerce clone that practises layout and navigation design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Navigation bar', 'Product layouts', 'Responsive design'],
    github: '',
    live: '',
    preview: 'shop',
  },
  {
    name: 'Tic Tac Toe Game',
    subtitle: 'Browser game',
    description: 'An interactive two-player game that runs in the browser.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Turn-based gameplay', 'Winner detection', 'Responsive UI'],
    github: '',
    live: '',
    preview: 'game',
  },
]

export const education = [
  { title: 'Bachelor of Computer Applications (BCA)', place: 'Shri Maata Degree College', period: '2023 – 2026', score: 'CGPA: 8.0' },
  { title: 'PUC / 12th Standard', place: 'S V Nanavate PU College', period: '2023', score: 'Percentage: 84%' },
  { title: 'SSLC / 10th Standard', place: 'Shri Shaileshwara Vidya Kendra', period: '2021', score: 'Percentage: 91.36%' },
]

export const certifications = [
  { title: 'Deloitte Technology Job Simulation', issuer: 'Forage', date: 'April 2026', note: 'Completed practical tasks in Coding and Development.' },
]
