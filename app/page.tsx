"use client";

// Import all the section components
import Navbar from '@/app/components/Navbar'; // [cite: uploaded:sakshamkumar28/saksham_portfolio/Saksham_Portfolio-8ed7f14f8d2a50ca9807f8860a131d9e0e6e73bf/app/page.tsx]
import HeroSection from '@/app/components/HeroSection'; // Updated import path [cite: uploaded:sakshamkumar28/saksham_portfolio/Saksham_Portfolio-8ed7f14f8d2a50ca9807f8860a131d9e0e6e73bf/app/page.tsx]
import AboutSection from '@/app/components/AboutSection';
import SkillsSection from '@/app/components/SkillsSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    // Add scroll-smooth here for global smooth scrolling if desired (add to <html> in layout.tsx)
    <main className="flex min-h-screen flex-col items-center bg-background"> {/* Ensure background color */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

