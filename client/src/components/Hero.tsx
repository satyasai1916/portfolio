import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import profileImage from "@assets/generated_images/Professional_developer_headshot.png";

interface HeroProps {
  name: string;
  title: string;
  introduction: string;
}

export default function Hero({ name, title, introduction }: HeroProps) {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-8 pt-16 md:pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Picture */}
        <div className="mb-8 md:mb-12" data-testid="container-profile">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden ring-4 ring-border shadow-lg">
            <img
              src={profileImage}
              alt={`${name} - Developer`}
              className="w-full h-full object-cover"
              data-testid="img-profile"
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 leading-tight"
          data-testid="text-name"
        >
          {name}
        </h1>

        {/* Title */}
        <h2
          className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-6 md:mb-8"
          data-testid="text-title"
        >
          {title}
        </h2>

        {/* Introduction */}
        <p
          className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-8 md:mb-12"
          data-testid="text-intro"
        >
          {introduction}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="w-full sm:w-auto text-base font-medium px-8"
            data-testid="button-view-projects"
          >
            View Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleDownloadResume}
            className="w-full sm:w-auto text-base font-medium px-8"
            data-testid="button-download-resume"
          >
            <Download className="mr-2 w-5 h-5" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
