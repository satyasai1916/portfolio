import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ExperienceSection from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { PortfolioData } from "@shared/schema";

export default function Portfolio() {
  const { data: portfolioData, isLoading } = useQuery<PortfolioData>({
    queryKey: ["/api/portfolio"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-lg text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-4 max-w-md">
          <p className="text-xl text-destructive font-semibold">Unable to load portfolio data</p>
          <p className="text-muted-foreground">Please try refreshing the page</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Hero
          name={portfolioData.name}
          title={portfolioData.title}
          introduction={portfolioData.introduction}
        />
        
        <Projects projects={portfolioData.projects} />
        
        <Skills skillCategories={portfolioData.skillCategories} />
        
        <ExperienceSection experiences={portfolioData.experiences} />
        
        <Contact
          email={portfolioData.email}
          linkedinUrl={portfolioData.linkedinUrl}
          githubUrl={portfolioData.githubUrl}
        />
      </main>
      
      <Footer />
    </div>
  );
}
