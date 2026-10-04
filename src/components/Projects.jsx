import React from 'react';
import './Projects.css';
import project1 from '../assets/image.png';

const projectsData = [
  {
    id: '01',
    title: 'Phone Store',
    category: 'POS System Application',
    year: '2024',
    img: project1,
    featured: true // This makes it the big hero card
  },
  {
    id: '02',
    title: 'Woodcraft',
    category: 'Furniture Website',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    featured: false
  },
  {
    id: '03',
    title: 'Urbanic',
    category: 'Fashion Magazine',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop',
    featured: false
  }
];

const Projects = () => {
  const featuredProject = projectsData.find(p => p.featured);
  const otherProjects = projectsData.filter(p => !p.featured);

  return (
    <section className="container projects-section">
      {/* Section Header */}
      <div className="section-title">
        <h3>Selected Projects</h3>
        <a href="#all" className="view-all">
          View All Projects <span className="arrow-icon">→</span>
        </a>
      </div>

      {/* Featured Project (Big Card) */}
      {featuredProject && (
        <a href={`#project-${featuredProject.id}`} className="featured-project-card">
          <div className="featured-image-wrapper">
            <img src={featuredProject.img} alt={featuredProject.title} />
            <div className="image-overlay"></div>
          </div>
          
          <div className="featured-content">
            <div className="featured-meta">
              <span className="project-id accent-text">/{featuredProject.id}</span>
              <span className="project-year">{featuredProject.year}</span>
            </div>
            <h2 className="featured-title">{featuredProject.title}</h2>
            <p className="featured-category">{featuredProject.category}</p>
            
            <div className="featured-action">
              <span>View Case Study</span>
              <span className="circle-arrow">→</span>
            </div>
          </div>
        </a>
      )}

      {/* Other Projects (Grid) */}
      <div className="projects-grid-modern">
        {otherProjects.map((project) => (
          <a href={`#project-${project.id}`} key={project.id} className="modern-project-card">
            <div className="modern-image-wrapper">
              <img src={project.img} alt={project.title} />
              <div className="image-overlay"></div>
              <span className="bg-number">{project.id}</span>
            </div>
            
            <div className="modern-info">
              <div className="modern-header">
                <h4>{project.title}</h4>
                <span className="modern-arrow">↗</span>
              </div>
              <div className="modern-meta">
                <p>{project.category}</p>
                <span>{project.year}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;