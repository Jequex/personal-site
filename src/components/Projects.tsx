import React from 'react';
import './Projects.css';
import data from '../data/data.json';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = data.projects as Project[];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-image-placeholder" id={project.image}>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="btn-project" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="btn-project btn-outline" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;