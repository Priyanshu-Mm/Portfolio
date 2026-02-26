import React from 'react'
import '../styles/About.css'
import profilePhoto from '../assets/me.jpeg'

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
      Hi, I'm Priyanshu Maurya, a passionate Software Developer and final-year B.Tech student specializing in Information Technology. I enjoy building responsive, user-friendly, and scalable web applications using modern technologies like JavaScript, React.js, and the MERN stack.

I have hands-on experience developing full-stack applications, including a Job Portal built using the MERN stack and multiple frontend-focused projects that emphasize clean UI, reusable components, and responsive design. I focus on writing structured, maintainable code and continuously improving performance and user experience.

Alongside development, I actively practice Data Structures and Algorithms to strengthen my problem-solving abilities and build a strong foundation in core computer science concepts like OOPS, DBMS, Operating Systems, and Computer Networks.

I am always eager to learn new technologies, collaborate on meaningful projects, and contribute to building impactful digital solutions.
          </p>
        </div>
        <div className="about-photo">
          <img src={profilePhoto} alt="Priyanshu Maurya Profile" />
        </div>
      </div>
    </section>
  )
}