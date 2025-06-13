
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React and Node.js, featuring user authentication, payment processing, and admin dashboard.',
      image: '/placeholder.svg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/placeholder.svg',
      tags: ['TypeScript', 'React', 'Socket.io', 'PostgreSQL'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and personalized weather alerts.',
      image: '/placeholder.svg',
      tags: ['React', 'Chart.js', 'Weather API', 'Tailwind'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing modern design principles with smooth animations and optimized performance.',
      image: '/placeholder.svg',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.demoUrl}
                      className="flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com"
              className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              <Github size={20} className="mr-2" />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
