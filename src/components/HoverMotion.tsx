"use client"
import React, { ReactNode, useState } from 'react';

interface HoverMotionProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  lift?: number;
  rotate?: number;
  brightness?: number;
  duration?: number;
}

/**
 * A component that provides subtle hover animations
 */
export default function HoverMotion({
  children,
  className = '',
  scale = 1.02,
  lift = 0,
  rotate = 0,
  brightness = 1,
  duration = 0.1,
}: HoverMotionProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getHoverStyle = () => {
    const transform = [];
    
    if (scale !== 1) {
      transform.push(`scale(${isHovered ? scale : 1})`);
    }
    
    if (lift > 0) {
      transform.push(`translateY(${isHovered ? -lift : 0}px)`);
    }
    
    if (rotate !== 0) {
      transform.push(`rotate(${isHovered ? rotate : 0}deg)`);
    }

    return {
      transform: transform.length ? transform.join(' ') : 'none',
      filter: isHovered && brightness !== 1 ? `brightness(${brightness})` : 'none',
      transition: `transform ${duration}s ease-out, filter ${duration}s ease-out`,
    };
  };

  return (
    <div
      className={className}
      style={getHoverStyle()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}