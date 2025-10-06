import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { SkillsSection } from '@/components/landing/SkillsSection';
import { ProjectsSection } from '@/components/landing/ProjectsSection';
import { ContactSection } from '@/components/landing/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
