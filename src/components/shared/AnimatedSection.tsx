'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(element);

    return () => {
        observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 transition-opacity duration-1000 ease-out transform',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </section>
  );
}
