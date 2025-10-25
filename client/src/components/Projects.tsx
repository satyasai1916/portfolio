import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@shared/schema";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 px-6 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="heading-projects"
          >
            Featured Projects
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and problem-solving approaches
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300"
              data-testid={`card-project-${project.id}`}
            >
              <CardHeader className="space-y-2">
                <CardTitle className="text-xl md:text-2xl" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="font-mono text-xs md:text-sm"
                      data-testid={`badge-tech-${project.id}-${index}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex flex-wrap gap-3">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    data-testid={`button-github-${project.id}`}
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                )}
                {project.demoUrl && (
                  <Button
                    size="sm"
                    asChild
                    data-testid={`button-demo-${project.id}`}
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
