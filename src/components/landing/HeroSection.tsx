import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDownToLine } from 'lucide-react';
import { AnimatedSection } from '../shared/AnimatedSection';

export function HeroSection() {
    const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

    return (
        <AnimatedSection id="hero" className="text-center pt-8 sm:pt-16">
            <div className="relative inline-block mb-8">
                <div className="absolute inset-0 rounded-full bg-accent opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute -inset-1 rounded-full bg-accent/30 opacity-20 blur-xl"></div>
                {profileImage && (
                    <Image
                        src={profileImage.imageUrl}
                        alt={profileImage.description}
                        data-ai-hint={profileImage.imageHint}
                        width={160}
                        height={160}
                        className="relative rounded-full w-40 h-40 object-cover border-4 border-background"
                        priority
                    />
                )}
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
                <Button size="lg" variant="outline" asChild className="transition-transform duration-200 hover:scale-105">
                     <a href="#contact">Get In Touch</a>
                </Button>
            </div>
        </AnimatedSection>
    );
}
