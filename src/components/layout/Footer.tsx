import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-border/50">
            <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
                <p className="text-sm text-muted-foreground">
                    &copy; {year} Viki Gaikwad. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://github.com/viki108-bit" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://www.linkedin.com/in/viki-gaikwad-1081-bit" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="mailto:vikigaikwad108@gmail.com" aria-label="Email">
                            <Mail className="h-5 w-5" />
                        </a>
                    </Button>
                </div>
            </div>
        </footer>
    );
}
