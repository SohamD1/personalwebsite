
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Get In <span className="heading-highlight">Touch</span></h2>
        
        <div 
          ref={ref}
          className={`max-w-5xl mx-auto transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                I'm interested in freelance opportunities – especially ambitious or large projects. 
                However, if you have other request or question, don't hesitate to contact me.
              </p>
              
              <div className="space-y-6">
                <ContactItem icon={<Mail size={20} />} title="Email">
                  <a href="mailto:your.email@example.com" className="text-portfolio-blue hover:underline">
                    your.email@example.com
                  </a>
                </ContactItem>
                
                <ContactItem icon={<Phone size={20} />} title="Phone">
                  <a href="tel:+1234567890" className="text-portfolio-blue hover:underline">
                    +1 (234) 567-890
                  </a>
                </ContactItem>
                
                <ContactItem icon={<MapPin size={20} />} title="Location">
                  <span className="text-gray-300">San Francisco, CA</span>
                </ContactItem>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-medium mb-4">Find me on</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-muted w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Github size={20} className="text-portfolio-blue" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-muted w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Linkedin size={20} className="text-portfolio-blue" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg card-hover">
              <h3 className="text-xl font-bold mb-6">Send me a message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50"
                    placeholder="Soham Dave"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type ContactItemProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

const ContactItem = ({ icon, title, children }: ContactItemProps) => (
  <div className="flex items-start">
    <div className="mr-4 bg-secondary p-2 rounded-full text-portfolio-blue">
      {icon}
    </div>
    <div>
      <h4 className="text-base font-medium text-gray-300 mb-1">{title}</h4>
      {children}
    </div>
  </div>
);

export default ContactSection;
