
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "TabHive - Chrome Extension",
    category: "Web Application",
    image: "https://imgur.com/a/BMFsvrb",
    description: "TabHive is a productivity-focused Chrome extension that organizes your open tabs by clustering them based on semantic similarity to user-inputted topics",
    technologies: ["TypeScript", "HTML", "Chrome APIs"],
    liveLink: "https://tab-hive.vercel.app/",
    githubLink: "https://github.com/sohamd1/tabhive"
  },
  {
    id: 2,
    title: "PianoWise - AI Hackathon 1st Place ~ $ 500",
    category: "Web Application",
    image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/330/472/datas/gallery.jpg",
    description: "GenAI Genesis best accessibility hack. Virtual Piano player with an AI tutor providing personalized feedback. ",
    technologies: ["React", "TypeScript", "Tensorflow", "Cursor"],
    liveLink: "https://devpost.com/software/pianowise",
    githubLink: "https://github.com/Raptors65/pianowise"
  },
  {
    id: 3,
    title: "This Website!",
    category: "Website",
    image: "https://i.imgur.com/kHhP3xd.png",
    description: "A responsive portfolio website with experiences, projects, and a contact form.",
    technologies: ["Next.js", "Tailwind CSS", "React", "shadcn"],
    liveLink: "#",
    githubLink: "https://github.com/SohamD1/personalwebsite"
  },
  {
  id: 4,
  title: "Tech Debt Tracker CRUD App",
  category: "Web Application",
  image: "https://i.imgur.com/ErE6sWR.png?1",
  description: "A finance application that helps SaaS companies track expenses, set budgets, and visualize spending patterns.",
  technologies: ["React", "Node.js", "Express", "lowDB"],
  liveLink: "https://github.com/sohamd1/tech-debt-tracker",
  githubLink: "https://github.com/sohamd1/tech-debt-tracker"
}
];

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title">
          My <span className="heading-highlight">Projects</span>
        </h2>
        
        {/* Projects grid */}
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  delay: number;
};

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveLink,
  githubLink,
  delay,
}: ProjectCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <div 
      ref={ref}
      className="bg-card rounded-lg overflow-hidden card-hover transition-all duration-700"
      style={{ 
        transitionDelay: `${delay}s`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-muted text-gray-300 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between">
          <a 
            href={liveLink} 
            className="flex items-center text-portfolio-green hover:text-portfolio-green-dark text-sm transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} className="mr-1" /> Live Demo
          </a>
          <a 
            href={githubLink} 
            className="flex items-center text-portfolio-green hover:text-portfolio-green-dark text-sm transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} className="mr-1" /> Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
