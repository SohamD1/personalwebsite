
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from 'react-intersection-observer';
import { Badge } from "@/components/ui/badge";
import { Briefcase } from 'lucide-react';

const experiences = [
  {
  id: 1,
  role: "Software Engineering Intern",
  company: "Kal-Polymers",
  period: "May. 2025 - Aug. 2025",
  highlights: [
    "Built production efficiency dashboard in Flask + SQL tracking lbs/hr, boosting machine efficiency by 45%",
    "Developed quality dashboard comparing lab results vs. customer specs, raising first-pass yield by 30%",
    "Deployed real-time machine dashboards with JavaScript displayed on plant TVs, giving live visibility on machines",
    "Built interactive financial reporting dashboards with visual analytics, aiding CFO with decision making",
    "Created digital training module and defect prevention video, reducing operator error and accelerating onboarding"
  ]
}
,
  {
    id: 2,
    role: "Full Stack Engineering Intern",
    company: "Start-Up",
    period: "Dec. 2024 - Present",
    highlights: [
      "Developed a dynamic web app using Next.js (frontend) and Node.js (backend) with RESTful APIs and Supabase for secure, real-time data management.",
      "Optimized scalability by streamlining deployment workflows on AWS and Vercel."
    ]
  },
  {
    id: 3,
    role: "AI Research Intern",
    company: "Algoverse",
    period: "Oct. 2024 - Present",
    highlights: [
      "Developed a Sparse Autoencoder for GPT-2 Small using PyTorch and NumPy.",
      "Evaluated SAE features across NLP tasks like sentiment analysis and logical reasoning."
    ]
  },
  {
    id: 4,
    role: "Data Analyst Intern",
    company: "Liferoll",
    period: "May 2024 - Aug. 2024",
    highlights: [
      "Designed data-driven solutions that boosted user engagement metrics by 15%.",
      "Collaborated with cross-functional teams to develop strategies informed by user insights."
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
  highlights: string[];
  isEven: boolean;
  delay: number;
};

const TimelineItem = ({ role, company, period, highlights, isEven, delay }: TimelineItemProps) => {
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
