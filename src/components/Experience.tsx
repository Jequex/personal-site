import React from 'react';
import './Experience.css';
import data from '../data/data.json';

interface ExperienceItem {
  id: number;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

const Experience: React.FC = () => {
  const experience: ExperienceItem[] = data.experience as ExperienceItem[];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="experience-timeline">
          {experience.map((item, index) => (
            <div key={item.id} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="experience-content">
                <div className="experience-header">
                  <div className="position-info">
                    <h3>{item.position}</h3>
                    <h4>{item.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="duration">{item.startDate} - {item.endDate}</span>
                    <span className="location">{item.location}</span>
                    <span className="type">{item.type}</span>
                  </div>
                </div>
                
                <p className="experience-description">{item.description}</p>
                
                <div className="experience-section">
                  <h5>Key Responsibilities:</h5>
                  <ul className="responsibilities-list">
                    {item.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-section">
                  <h5>Technologies Used:</h5>
                  <div className="technologies">
                    {item.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="experience-section">
                  <h5>Key Achievements:</h5>
                  <ul className="achievements-list">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="experience-icon">
                <div className="icon-circle">
                  💼
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;