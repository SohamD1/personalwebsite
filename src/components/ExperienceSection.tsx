
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from 'react-intersection-observer';
import { Badge } from "@/components/ui/badge";
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Lead a team of developers to build and maintain multiple React applications. Implemented performance optimizations that improved load times by 40%. Established coding standards and review processes.",
    highlights: [
      "Architected and delivered a component library used across 5 products",
      "Reduced bundle size by 30% through code splitting and lazy loading",
      "Mentored junior developers and conducted technical interviews"
    ]
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description: "Developed responsive web applications using React, Redux, and TypeScript. Collaborated with UX designers to implement pixel-perfect interfaces. Participated in Agile development processes.",
    highlights: [
      "Created reusable UI components that improved development velocity",
      "Implemented unit and integration tests, achieving 80% code coverage",
      "Participated in UX research and design planning sessions"
    ]
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "Creative Web Agency",
    period: "2016 - 2018",
    description: "Built and maintained websites for various clients using HTML, CSS, and JavaScript. Collaborated with designers to translate mockups into functional websites. Optimized sites for speed and SEO.",
    highlights: [
      "Developed responsive layouts for 15+ client websites",
      "Implemented SEO best practices resulting in improved rankings",
      "Gained experience with WordPress, PHP, and jQuery"
    ]
  }
];

const ExperienceSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Work <span className="heading-highlight">Experience</span></h2>
        
        <div 
          ref={ref} 
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-portfolio-blue/30"></div>
            
            {/* Experience items */}
            {experiences.map((exp, index) => (
              <TimelineItem 
                key={exp.id}
                role={exp.role}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                highlights={exp.highlights}
                isEven={index % 2 === 0}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type TimelineItemProps = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  isEven: boolean;
  delay: number;
};

const TimelineItem = ({ role, company, period, description, highlights, isEven, delay }: TimelineItemProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  return (
    <div 
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center mb-12 last:mb-0`}
      style={{ 
        transitionDelay: `${delay}s`,
        transitionProperty: 'all',
        transitionDuration: '0.7s',
      }}
    >
      {/* Timeline node */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 bg-portfolio-blue rounded-full flex items-center justify-center z-10">
        <Briefcase size={20} className="text-portfolio-black" />
      </div>
      
      {/* Content */}
      <div 
        className={`ml-16 md:ml-0 w-full md:w-5/12 ${
          isEven ? 'md:pr-12' : 'md:pl-12 md:ml-auto text-left'
        } transition-all duration-700 ${
          inView 
            ? 'opacity-100' 
            : 'opacity-0'
        } ${
          isEven 
            ? inView ? 'md:translate-x-0' : 'md:-translate-x-16' 
            : inView ? 'md:translate-x-0' : 'md:translate-x-16'
        }`}
      >
        <div className="bg-card p-6 rounded-lg shadow-md card-hover">
          <div className="text-sm text-portfolio-blue font-medium mb-1">
            {period}
          </div>
          <h3 className="text-xl font-bold mb-1">{role}</h3>
          <h4 className="text-gray-400 font-medium mb-3">{company}</h4>
          <p className="text-gray-300 mb-4">
            {description}
          </p>
          <div>
            <h5 className="text-sm font-medium mb-2 text-portfolio-blue">Key Achievements:</h5>
            <ul className="text-sm text-gray-400 space-y-1">
              {highlights.map((highlight, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-portfolio-blue mr-2">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
