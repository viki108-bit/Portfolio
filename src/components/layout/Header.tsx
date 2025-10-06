'use client';
import { cn } from '@/lib/utils';
import { Eye, Briefcase } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { getVisitCount } from '@/app/actions';

const VisitCounter = () => {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        getVisitCount().then(setCount);
    }, []);

    return (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Eye className="h-4 w-4 text-accent" />
            <span className="font-mono">
                {count !== null ? count.toLocaleString() : '...'}
            </span>
        </div>
    );
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' : 'bg-transparent'
    )}>
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-2 font-headline text-xl font-bold">
            <Briefcase className="h-6 w-6 text-primary"/>
            Data Harbor
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
            <VisitCounter />
        </div>
      </div>
    </header>
  );
}
