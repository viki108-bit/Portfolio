import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDownToLine } from 'lucide-react';
import { AnimatedSection } from '../shared/AnimatedSection';

export function HeroSection() {
    return (
        <AnimatedSection id="hero" className="text-center pt-8 sm:pt-16">
            <div className="relative inline-block mb-8">
                <div className="absolute inset-0 rounded-full bg-accent opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute -inset-1 rounded-full bg-accent/30 opacity-20 blur-xl"></div>
                <Image
                    src="/profile.jpg"
                    alt="Viki Gaikwad"
                    data-ai-hint="professional portrait"
                    width={240}
                    height={240}
                    className="relative rounded-full w-60 h-60 object-cover border-4 border-background"
                    priority
                />
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Viki Gaikwad
            </h1>
            <p className="mt-4 font-headline text-xl sm:text-2xl text-primary">
                Data Analyst | Data Scientist | Python Developer
            </p>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
                Transforming complex data into clear, actionable insights. Welcome to my digital portfolio
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                    size="lg" 
                    asChild 
                    className="bg-[#ff4081] text-white hover:bg-[#ff4081]/90 transition-transform duration-200 hover:scale-105"
                >
                    <a href="/resume.pdf" download="VikiGaikwad-Resume.pdf">
                        <ArrowDownToLine className="mr-2 h-5 w-5" />
                        Download CV
                    </a>
                </Button>
            </div>
        </AnimatedSection>
    );
}
