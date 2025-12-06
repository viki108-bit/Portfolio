import Image from 'next/image';
import { AnimatedSection } from '../shared/AnimatedSection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
    {
        title: "Blinkit Sales Dashboard",
        description: "A Power BI dashboard analyzing Blinkit’s sales data to provide insights into total sales, item categories, outlet performance, and sales trends.",
        imageUrl: "/blinkit-dashboard.jpg",
        imageDescription: "Blinkit Sales Dashboard Screenshot",
        tags: ["Power BI", "Data Modelling", "DAX", "Data Visualization"],
        liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiYjIxMDhmMDctZWM3NS00NTk1LTk4YjMtMmQ3NWFiMzY1NzIzIiwidCI6ImQzOGI4YmJiLTg0MDYtNDVhMC05M2JiLWI0MDZkMjAwY2YzYiJ9",
        githubUrl: "https://github.com/viki108-bit/Blinkit-Sales-Dashboard"
    },
    {
        title: "HR Dashboard",
        description: "An Excel dashboard to analyze employee data, highlighting demographics, performance, and salary distributions using Pivot Tables, Charts, and Slicers.",
        imageUrl: "/hr-dashboard.jpg",
        imageDescription: "HR Analytics Dashboard Screenshot",
        tags: ["Excel", "Pivot Tables", "Data Visualization", "HR Analytics"],
        liveUrl: "",
        githubUrl: "https://github.com/viki108-bit/excel-HR-dashboard2-projects"
    },
    {
        title: "Sales Dashboard",
        description: "An Excel dashboard analyzing sales performance across sellers, categories, and states. It highlights key insights like top performers, monthly peaks, and geographical trends.",
        imageUrl: "/sales-dashboard.jpg",
        imageDescription: "Sales Dashboard Screenshot",
        tags: ["Excel", "Data Visualization", "Sales Analytics"],
        liveUrl: "",
        githubUrl: "https://github.com/viki108-bit/excel-Sale-dashboard-projects"
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
                <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <Card key={index} className="flex flex-col bg-card/50 hover:bg-card border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                            <CardHeader>
                                {project.imageUrl && (
                                    <div className="relative aspect-video">
                                        <Image 
                                            src={project.imageUrl} 
                                            alt={project.imageDescription}
                                            width={600}
                                            height={400}
                                            className="rounded-lg object-contain"
                                        />
                                    </div>
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
