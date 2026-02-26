import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/Contact.css'

const socialLinks = {
  github: 'https://github.com/Priyanshu-Mm',
  linkedin: 'https://www.linkedin.com/in/priyanshu-maurya-a87b88302',
  leetcode: 'https://leetcode.com/u/Priyanshu_001/',
  gfg: 'https://www.geeksforgeeks.org/profile/maupriyavb3b?tab=activity',
}

export default function Contact() {
  const form = useRef()
  const [status, setStatus] = useState(null)

  const serviceID = 'service_vi5fire'
  const templateID = 'template_yab9n4g'
  const publicKey = 'prwatwuOekVl2Puqs'

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus(null)

    const name = form.current.from_name.value.trim()
    const email = form.current.from_email.value.trim()
    const message = form.current.message.value.trim()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!name) {
      setStatus({ success: false, message: "Please enter your name." })
      return
    }

    if (!emailRegex.test(email)) {
      setStatus({ success: false, message: "Please enter a valid email address." })
      return
    }

    if (!message) {
      setStatus({ success: false, message: "Please enter your message." })
      return
    }

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        (result) => {
          console.log("SUCCESS:", result.text)
          setStatus({ success: true, message: "Message sent successfully!" })
          form.current.reset()
        },
        (error) => {
          console.log("ERROR:", error)
          setStatus({ success: false, message: error.text || "Failed to send message." })
        }
      )
  }

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form" noValidate>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="from_name" required placeholder="Your name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="from_email" required placeholder="Your email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required placeholder="Your message" />

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>

        {status && (
          <p className={`form-status ${status.success ? 'success' : 'error'}`} role="alert">
            {status.message}
          </p>
        )}
      </form>

      {/* SOCIAL LINKS SAME AS BEFORE */}
      <div className="social-links" aria-label="Social media links">
        {/* your icons unchanged */}
      </div>

      <p className='footer'>© 2025 Priyanshu Maurya. || All rights reserved.</p>
    </section>
  )
}