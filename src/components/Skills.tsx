import React from 'react';
import './Skills.css';
import data from '../data/data.json';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = data.skills as Skill[];

  const categories = ['Frontend', 'Backend', 'Tools'];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-content">
          {categories.map((category) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skills-list">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;