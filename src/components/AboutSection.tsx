
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Briefcase, Eye, FileText } from 'lucide-react';

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 relative">
      <div className="section-container">
        <h2 className="section-title">About <span className="heading-highlight">Me</span></h2>
        
        <div 
          ref={ref} 
          className={`grid md:grid-cols-2 gap-10 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate Frontend Developer with over 5 years of experience creating 
              engaging and functional web applications. My journey in web development started
              with simple HTML and CSS, and has evolved to embrace modern frameworks and tools.
            </p>
            <p className="text-gray-300 mb-6">
              I specialize in building responsive, user-friendly interfaces that provide exceptional
              user experiences. My approach combines technical expertise with creative problem-solving
              to deliver solutions that exceed expectations.
            </p>
            <div className="flex gap-4">
              <a href="#experience" className="btn-outline" onClick={(e) => {
                e.preventDefault();
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                My Experience
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SkillCard 
                icon={<Code size={24} />} 
                title="Frontend Development" 
                skills={["React", "TypeScript", "Next.js", "Tailwind CSS"]} 
              />
              <SkillCard 
                icon={<Eye size={24} />} 
                title="UI/UX Design" 
                skills={["Figma", "User Research", "Prototyping", "Accessibility"]} 
              />
              <SkillCard 
                icon={<Briefcase size={24} />} 
                title="Tools & Others" 
                skills={["Git", "Jest", "Storybook", "Webpack"]} 
              />
              <SkillCard 
                icon={<FileText size={24} />} 
                title="Soft Skills" 
                skills={["Communication", "Problem Solving", "Team Collaboration", "Time Management"]} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  skills: string[];
};

const SkillCard = ({ icon, title, skills }: SkillCardProps) => (
  <div className="bg-secondary p-4 rounded-lg card-hover">
    <div className="text-portfolio-green mb-2">{icon}</div>
    <h4 className="text-lg font-medium mb-2">{title}</h4>
    <ul className="text-sm text-gray-400">
      {skills.map((skill, index) => (
        <li key={index} className="mb-1">• {skill}</li>
      ))}
    </ul>
  </div>
);

export default AboutSection;
