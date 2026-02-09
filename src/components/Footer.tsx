import React from 'react';
import './Footer.css';
import data from '../data/data.json';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{data.name}</h3>
            <p>{data.role} passionate about creating amazing web experiences.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href={data.socials.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={data.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={data.socials['company-gitlab']} aria-label="Twitter" target="_blank" rel="noopener noreferrer">GitLab</a>
              {/* <a href={data.socials.gitlab} aria-label="GitLab" target="_blank" rel="noopener noreferrer">GitLab</a> */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} {data.name}. All rights reserved.</p>
          <p>Built with React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;