import React, { useState } from 'react';
import './Contact.css';
import data from '../data/data.json';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sendMail = () => {
    const config = {
      template_id: 'template_bs1wgaa',
      public_key: 'K80QXelxrH-2-cf6x',
      service_id: 'service_tvd49o7'
    };
    try {
      emailjs.send(config.service_id, config.template_id, {
        name: formData.name,
        email: formData.email,
        message: formData.message
      }, config.public_key)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMail();
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${data.email}`}>{data.email}</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  {data.phones.map((phone, index) => (
                    <p key={index}>
                      <a href={`tel:${phone}`}>{phone}</a>
                    </p>
                  ))}
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${data.location}`}>{data.location}</a>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href={data.socials.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={data.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={data.socials['company-gitlab']} aria-label="GitLab" target="_blank" rel="noopener noreferrer">GitLab</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;