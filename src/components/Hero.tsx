import React from 'react';
import './Hero.css';
import data from '../data/data.json';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">{data.name}</span>
          </h1>
          <h2>{data.role}</h2>
          <p>
            {data.bio}
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={scrollToProjects}>
              View My Work
            </button>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;