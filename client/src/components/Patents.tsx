import { FC } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { type Patent } from "@shared/schema";
import { Globe } from "lucide-react";

interface PatentsProps {
  patents: Patent[];
}

const Patents: FC<PatentsProps> = ({ patents }) => {
  if (!patents || patents.length === 0) {
    return null;
  }

  return (
    <section id="patents" className="py-16 md:py-24 lg:py-32 px-6 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="heading-patents"
          >
            Patent Contributions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovations and intellectual property contributions, showcasing problem-solving and technical leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {patents.map((patent) => (
            <Card
              key={patent.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl md:text-2xl">{patent.title}</CardTitle>
                    <CardDescription className="text-sm md:text-base text-muted-foreground mt-1">
                      {patent.applicationNumber} - <span className="font-semibold">{patent.status}</span>
                    </CardDescription>
                  </div>
                  {patent.url && (
                    <a
                      href={patent.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`View patent ${patent.title}`}
                    >
                      <Globe size={20} />
                    </a>
                  )}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patents;
