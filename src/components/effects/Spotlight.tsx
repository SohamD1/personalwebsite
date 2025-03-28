
import React from 'react';
import { cn } from '@/lib/utils';

interface SpotlightProps {
  className?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const Spotlight: React.FC<SpotlightProps> = ({
  className,
  color = '#94D058',
  size = 'lg',
  position = 'top-right'
}) => {
  const sizeClass = {
    sm: 'w-[400px] h-[400px]',
    md: 'w-[600px] h-[600px]',
    lg: 'w-[800px] h-[800px]'
  };

  const positionClass = {
    'top-left': '-top-40 -left-40',
    'top-right': '-top-40 -right-40',
    'bottom-left': '-bottom-40 -left-40',
    'bottom-right': '-bottom-40 -right-40'
  };

  return (
    <div 
      className={cn(
        'absolute blur-[100px] rounded-full opacity-20 z-0 pointer-events-none',
        sizeClass[size],
        positionClass[position],
        className
      )}
      style={{ backgroundColor: color }}
    />
  );
};

export default Spotlight;
