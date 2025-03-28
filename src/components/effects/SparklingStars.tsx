
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface Star {
  id: number;
  x: string;
  y: string;
  size: string;
  delay: string;
  duration: string;
}

interface SparklingStarsProps {
  count?: number;
  className?: string;
}

export const SparklingStars: React.FC<SparklingStarsProps> = ({
  count = 50,
  className
}) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      
      for (let i = 0; i < count; i++) {
        newStars.push({
          id: i,
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
          size: `${Math.random() * 0.2 + 0.1}rem`,
          delay: `${Math.random() * 5}s`,
          duration: `${Math.random() * 3 + 2}s`,
        });
      }
      
      setStars(newStars);
    };

    generateStars();
    
    // Regenerate stars on window resize
    const handleResize = () => {
      generateStars();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [count]);

  return (
    <div className={cn("fixed inset-0 z-0 pointer-events-none overflow-hidden", className)}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-0 animate-sparkle-slow"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        >
          <div className="absolute inset-0 rounded-full bg-white blur-[1px]" />
        </div>
      ))}
    </div>
  );
};

export default SparklingStars;
