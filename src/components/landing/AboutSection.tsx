import { AnimatedSection } from '../shared/AnimatedSection';
import Image from 'next/image';

export function AboutSection() {
    return (
        <AnimatedSection id="about">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
                <div className="md:col-span-2">
                    <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Hello! I'm Viki Gaikwad, a passionate data professional with expertise in data analysis, data science, and Python development. I thrive on transforming complex datasets into meaningful stories and actionable insights. My journey in data has been driven by a relentless curiosity and a desire to solve real-world problems.
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Whether it's building predictive models, designing insightful dashboards, or developing data-driven applications, I am committed to delivering high-quality solutions that drive business value. I am constantly learning and exploring new technologies to stay at the forefront of the ever-evolving field of data.
                    </p>
                </div>
                 <div className="relative h-64 md:h-auto md:aspect-square">
                    <Image
                        src="/profile.jpg"
                        alt="Viki Gaikwad"
                        data-ai-hint="professional portrait"
                        fill
                        className="rounded-lg object-cover object-top"
                    />
                </div>
            </div>
        </AnimatedSection>
    );
}
