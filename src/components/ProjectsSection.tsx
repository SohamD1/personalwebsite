import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "A comprehensive dashboard for e-commerce stores with analytics, inventory management, and order processing capabilities.",
    technologies: ["React", "TypeScript", "Redux", "Chart.js"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Budget Tracker",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "A personal finance application that helps users track expenses, set budgets, and visualize spending patterns.",
    technologies: ["React", "Node.js", "MongoDB", "D3.js"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Travel Blog",
    category: "Website",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "A responsive travel blog website with content management system, user authentication, and interactive maps.",
    technologies: ["Next.js", "Tailwind CSS", "Sanity.io", "MapBox"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Task Management System",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "A collaborative task management system with real-time updates, notifications, and team performance analytics.",
    technologies: ["React", "Firebase", "Tailwind CSS", "React DnD"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 5,
    title: "Photography Portfolio",
    category: "Website",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "A minimalist portfolio website for photographers with image galleries, filtering, and client management.",
    technologies: ["React", "Framer Motion", "Cloudinary", "GraphQL"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 6,
    title: "Weather App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    description: "A weather application with 7-day forecasts, location-based data, and customizable alerts for severe weather conditions.",
    technologies: ["React Native", "Redux", "OpenWeather API", "Geolocation"],
    liveLink: "#",
    githubLink: "#"
  }
];

const categories = ["All", "Web Application", "Website", "Mobile App"];

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title">My <span className="heading-highlight">Projects</span></h2>
        
        {/* Project filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-portfolio-green text-portfolio-black' 
                  : 'bg-secondary text-gray-300 hover:bg-muted'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {filteredProjects.map((project, index) => (
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

const ProjectCard = ({ title, description, image, technologies, liveLink, githubLink, delay }: ProjectCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <div 
      ref={ref}
      className={`bg-card rounded-lg overflow-hidden card-hover transition-all duration-700`}
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
