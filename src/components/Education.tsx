import React from 'react';
import './Education.css';
import data from '../data/data.json';

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  gpa?: string;
  achievements?: string[];
}

const Education: React.FC = () => {
  const education: EducationItem[] = data.education as EducationItem[];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-timeline">
          {education.map((item, index) => (
            <div key={item.id} className={`education-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="education-content">
                <div className="education-header">
                  <h3>{item.degree} in {item.field}</h3>
                  <div className="education-meta">
                    <span className="institution">{item.institution}</span>
                    <span className="location">{item.location}</span>
                    <span className="duration">{item.startDate} - {item.endDate}</span>
                  </div>
                </div>
                <p className="education-description">{item.description}</p>
                {item.gpa && (
                  <div className="gpa">
                    <strong>GPA: {item.gpa}/4.0</strong>
                  </div>
                )}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="education-icon">
                <div className="icon-circle">
                  🎓
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;