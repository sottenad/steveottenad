"use client"

import React, { ReactNode, useRef, useEffect, useState } from 'react';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  once?: boolean;
}

/**
 * A component that provides a subtle fade-in animation when the element enters the viewport
 */
export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.2,
  className = '',
  distance = 20,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Get initial styles based on direction
  const getInitialStyles = () => {
    let transform = '';
    
    switch (direction) {
      case 'up':
        transform = `translateY(${distance}px)`;
        break;
      case 'down':
        transform = `translateY(-${distance}px)`;
        break;
      case 'left':
        transform = `translateX(${distance}px)`;
        break;
      case 'right':
        transform = `translateX(-${distance}px)`;
        break;
      case 'none':
        transform = '';
        break;
      default:
        transform = `translateY(${distance}px)`;
    }

    return {
      opacity: 0,
      transform,
    };
  };

  // Create animation style
  const getAnimationStyle = () => {
    const delayMs = delay * 1000;
    const durationMs = duration * 1000;
    
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translate(0, 0)' : getInitialStyles().transform,
      transition: `opacity ${durationMs}ms ease-out ${delayMs}ms, transform ${durationMs}ms ease-out ${delayMs}ms`,
    };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once]);

  return (
    <div 
      ref={ref} 
      className={className}
      style={getAnimationStyle()}
    >
      {children}
    </div>
  );
}