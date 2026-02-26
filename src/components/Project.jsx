import React from 'react'
import '../styles/Project.css'
import placeholder1 from '../assets/ApnaPaytm.png'
import placeholder2 from '../assets/JobPortal.jpg'
import placeholder3 from '../assets/hero.jpg'

const projects = [
  {
  title: 'Job Portal (MERN Stack)',
  tagline: 'Full-Stack Job Recruitment Platform',
  description:
    'A full-stack job portal application that allows recruiters to post and manage jobs while enabling job seekers to search and apply seamlessly. Built with MERN stack architecture featuring authentication, dynamic filtering, and responsive UI.',
  techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  live: '', // Add live link if deployed
  github: 'https://github.com/Priyanshu-Mm/job-portal-mern',
  screenshot: placeholder1,
  },
  {
  title: 'ApnaPaytm',
  tagline: 'Responsive Fintech UI Clone',
  description:
    'A modern Paytm-inspired fintech interface built to replicate real-world dashboard layouts and payment flows. Focused on responsive design, clean component structure, and mobile-first development using React and Tailwind CSS.',
  techStack: ['React', 'Tailwind CSS'],
  live: 'https://priyanshu-digipay.netlify.app/',
  github: 'https://github.com/Priyanshu-Mm/ApnaPaytm',
  screenshot: placeholder2,
},
  {
  title: 'Grow My Therapy Clone',
  tagline: 'Next.js & Tailwind CSS Assessment Project',
  description:
    'Built as part of a technical assessment, this project replicates the Grow My Therapy website using Next.js and Tailwind CSS. Focused on pixel-perfect UI replication, responsive layout design, and clean component-based architecture.',
  techStack: ['Next.js', 'Tailwind CSS'],
  live: 'https://grow-my-therapy-clone.netlify.app/',
  github: 'https://github.com/Priyanshu-Mm/grow-my-theropy-clone',
  screenshot: placeholder3,
},
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(
          ({ title, tagline, description, techStack, live, github, screenshot }, i) => (
            <article key={i} className="project-card" tabIndex={0} aria-label={`Project: ${title}`}>
              <div className="project-image-wrapper">
                <img src={screenshot} alt={`${title} screenshot`} loading="lazy" />
              </div>
              <div className="project-content">
                <h3>{title}</h3>
                <p className="tagline">{tagline}</p>
                <p className="description">{description}</p>
                <div className="tech-stack" aria-label="Tech stack">
                  {techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${title} GitHub repository`}
                      className="project-link"
                    >
                      GitHub
                    </a>
                  )}
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${title} live demo`}
                      className="project-link"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  )
}
