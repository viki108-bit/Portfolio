import { AnimatedSection } from '../shared/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { PythonIcon, RLangIcon, SQLIcon, TableauIcon, PowerBIIcon, ExcelIcon } from '@/lib/icons';
import { BrainCircuit } from 'lucide-react';

const skills = [
  { name: 'Python', icon: PythonIcon, category: 'Programming' },
  { name: 'R', icon: RLangIcon, category: 'Programming' },
  { name: 'SQL', icon: SQLIcon, category: 'Databases' },
  { name: 'Tableau', icon: TableauIcon, category: 'Visualization' },
  { name: 'Power BI', icon: PowerBIIcon, category: 'Visualization' },
  { name: 'Excel', icon: ExcelIcon, category: 'Tools' },
  { name: 'Machine Learning', icon: BrainCircuit, category: 'Techniques' },
];

export function SkillsSection() {
  return (
    <AnimatedSection id="skills">
      <div className="text-center">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">Technical Toolkit</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          The languages, tools, and technologies I use to bring data to life.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <Card key={index} className="bg-card/50 hover:bg-card border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <skill.icon className="h-10 w-10 text-primary" />
              <p className="mt-4 text-sm font-medium text-center">{skill.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
