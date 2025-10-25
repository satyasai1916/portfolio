import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import type { Experience } from "@shared/schema";

interface ExperienceProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 px-6 md:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="heading-experience"
          >
            Work Experience
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative space-y-8">
          {/* Timeline vertical line */}
          <div className="absolute left-[19px] top-8 bottom-8 w-0.5 bg-border hidden md:block" />
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex gap-6 items-start">
              {/* Timeline marker */}
              <div className="relative flex-shrink-0 hidden md:flex">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md ring-4 ring-background z-10">
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              
              {/* Experience card */}
              <Card
                className="flex-1 overflow-visible hover:shadow-lg transition-shadow duration-300"
                data-testid={`card-experience-${exp.id}`}
              >
                <CardHeader>
                  <div className="flex items-start gap-4 md:gap-0">
                    {/* Mobile icon (shown only on mobile) */}
                    <div className="flex-shrink-0 md:hidden">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl mb-2" data-testid={`text-role-${exp.id}`}>
                        {exp.role}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                        <p className="font-semibold text-foreground" data-testid={`text-company-${exp.id}`}>
                          {exp.company}
                        </p>
                        <span className="hidden sm:inline text-border">•</span>
                        <p className="text-sm md:text-base" data-testid={`text-duration-${exp.id}`}>
                          {exp.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 ml-2">
                    {exp.responsibilities.map((responsibility, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-sm md:text-base text-foreground/80"
                        data-testid={`text-responsibility-${exp.id}-${index}`}
                      >
                        <span className="text-primary mt-1.5">•</span>
                        <span className="flex-1">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
