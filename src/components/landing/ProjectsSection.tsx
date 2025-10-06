import Image from 'next/image';
import { AnimatedSection } from '../shared/AnimatedSection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
    {
        title: "Customer Churn Prediction",
        description: "Developed a machine learning model to predict customer churn for a telecom company, achieving 85% accuracy and identifying key drivers of attrition.",
        image: PlaceHolderImages.find(p => p.id === 'project-3'),
        tags: ["Python", "Scikit-learn", "Pandas"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Sales Performance Dashboard",
        description: "Designed and built an interactive dashboard in Tableau to track sales metrics, enabling the sales team to monitor performance and identify opportunities in real-time.",
        image: PlaceHolderImages.find(p => p.id === 'project-1'),
        tags: ["Tableau", "SQL"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Market Basket Analysis",
        description: "Conducted market basket analysis on retail transaction data to uncover product associations, leading to a 15% increase in cross-sell revenue.",
        image: PlaceHolderImages.find(p => p.id === 'project-2'),
        tags: ["R", "SQL", "Data Mining"],
        liveUrl: "#",
        githubUrl: "#",
    }
]

export function ProjectsSection() {
    return (
        <AnimatedSection id="projects">
            <div className="text-center">
                <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    A selection of projects that demonstrate my skills in data analysis, visualization, and machine learning.
                </p>
            </div>

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
                            <Button variant="ghost" asChild>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" /> Code
                                </a>
                            </Button>
                             <Button asChild>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </AnimatedSection>
    );
}
