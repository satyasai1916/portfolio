import { Card } from "@/components/ui/card";
import type { SkillCategory } from "@shared/schema";

interface SkillsProps {
  skillCategories: SkillCategory[];
}

export default function Skills({ skillCategories }: SkillsProps) {
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="heading-skills"
          >
            Skills & Technologies
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build modern, scalable applications
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} data-testid={`category-${categoryIndex}`}>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <Card
                    key={skillIndex}
                    className="p-6 text-center hover:shadow-md transition-shadow duration-200"
                    data-testid={`skill-${categoryIndex}-${skillIndex}`}
                  >
                    <p className="font-medium text-base md:text-lg text-foreground">
                      {skill}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
