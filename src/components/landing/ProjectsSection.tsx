import Image from 'next/image';
import { AnimatedSection } from '../shared/AnimatedSection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
    {
        title: "HR Analytics Dashboard",
        description: "An interactive dashboard built in Excel to analyze employee data. It features insights on demographics, performance, and salary distribution using Pivot Tables, Charts, and Slicers to drive data-informed HR decisions.",
        image: PlaceHolderImages.find(p => p.id === 'project-1'),
        tags: ["Excel", "Data Visualization", "Pivot Tables", "HR Analytics"],
        liveUrl: "",
        githubUrl: "https://github.com/viki108-bit/excel-HR-dashboard2-projects"
    }
]

export function ProjectsSection() {
    return (
        <AnimatedSection id="projects">
            <div className="text-center">
                <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">Projects</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    A selection of projects that demonstrate my skills in data analysis, visualization, and machine learning.
                </p>
            </div>

            {projects.length > 0 ? (
                <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <Card key={index} className="flex flex-col bg-card/50 hover:bg-card border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                            <CardHeader>
                                {project.image && (
                                    <Image 
                                        src={project.image.imageUrl} 
                                        alt={project.image.description}
                                        data-ai-hint={project.image.imageHint}
                                        width={600} 
                                        height={400} 
                                        className="rounded-lg object-cover aspect-video"
                                    />
                                )}
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                                <CardDescription className="mt-2">{project.description}</CardDescription>
                                 <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-end gap-2">
                                {project.githubUrl && (
                                    <Button variant="ghost" asChild>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" /> Code
                                        </a>
                                    </Button>
                                )}
                                {project.liveUrl && (
                                     <Button asChild>
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="mt-12 text-center text-muted-foreground">
                    <p>My projects are coming soon. Please check back later!</p>
                </div>
            )}
        </AnimatedSection>
    );
}
