import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

interface ContactProps {
  email: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export default function Contact({ email, linkedinUrl, githubUrl }: ContactProps) {
  const handleContactClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="heading-contact"
          >
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat
          </p>
        </div>

        {/* Contact Content */}
        <div className="space-y-8">
          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-email"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </Card>

            {linkedinUrl && (
              <Card className="p-6 text-center hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">LinkedIn</h3>
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-linkedin"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </Card>
            )}

            {githubUrl && (
              <Card className="p-6 text-center hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">GitHub</h3>
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-github"
                    >
                      View Repositories
                    </a>
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Contact Button */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={handleContactClick}
              className="text-base font-medium px-10"
              data-testid="button-contact-me"
            >
              <Mail className="mr-2 w-5 h-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
