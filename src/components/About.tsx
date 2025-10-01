import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a love for creating innovative
              web solutions. With experience in modern frameworks and technologies,
              I enjoy turning complex problems into simple, beautiful designs.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>7+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-image-placeholder">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;