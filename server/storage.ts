import { type User, type InsertUser, type PortfolioData } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getPortfolioData(): Promise<PortfolioData>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private portfolioData: PortfolioData;

  constructor() {
    this.users = new Map();
    
    // Initialize portfolio data with professional sample content
    this.portfolioData = {
      name: "Satya Yallavula",
      title:"Backend Developer, Gen - AI applications",
      introduction: "Passionate developer with expertise in building robust customer experience applications. I specialize in developing and contributing to scalable architectures. Always eager to learn new technologies and solve complex problems.",
      email: "yvssai@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/venkata-satya-sai-yallavula-bb64821b1/",
      githubUrl: "https://github.com/satyasai1916",
      projects: [
        {
          id: "1",
          title: "E-Commerce Platform",
          description: "A full-featured e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built to handle high traffic and scale seamlessly.",
          techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
          githubUrl: "",
          demoUrl: "",
        },
        {
          id: "2",
          title: "Task Management App",
          description: "Collaborative project management tool with real-time updates, drag-and-drop kanban boards, team chat, and comprehensive analytics. Designed for remote teams.",
          techStack: ["TypeScript", "Next.js", "Prisma", "WebSockets", "Tailwind CSS"],
          githubUrl: "",
          demoUrl: "",
        },
        {
          id: "3",
          title: "Weather Forecast Dashboard",
          description: "Beautiful weather application featuring 7-day forecasts, interactive maps, severe weather alerts, and location-based recommendations. Clean UI with smooth animations.",
          techStack: ["React", "TypeScript", "OpenWeather API", "Recharts", "Framer Motion"],
          githubUrl: "",
          demoUrl: "",
        },
        {
          id: "4",
          title: "AI Chat Assistant",
          description: "Intelligent chatbot powered by machine learning for customer support automation. Features context-aware responses, sentiment analysis, and multi-language support.",
          techStack: ["Python", "FastAPI", "OpenAI", "React", "Docker"],
          githubUrl: "",
        },
      ],
      skillCategories: [
        {
          category: "Frontend",
          skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Redux", "HTML/CSS", "Responsive Design"],
        },
        {
          category: "Backend",
          skills: ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
        },
        {
          category: "DevOps & Tools",
          skills: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Nginx", "Jest", "Webpack"],
        },
        {
          category: "Other",
          skills: ["Agile/Scrum", "UI/UX Design", "System Design", "Performance Optimization"],
        },
      ],
      experiences: [
        {
          id: "1",
          company: "Rakuten Mobile Inc",
          role: "Senior Full-Stack Developer",
          duration: "April 2025 - Present",
          responsibilities: [
            "Led development of a microservices architecture serving 100K+ daily active users, improving system reliability by 40%",
            "Mentored junior developers and conducted code reviews, establishing best practices that reduced bug reports by 30%",
          ],
        },
        {
          id: "2",
          company: "Rakuten Mobile Inc",
          role: "Software Engineer",
          duration: "March 2024 - April 2025",
          responsibilities: [
            "Built and deployed 5+ customer-facing web applications using React, Node.js, and PostgreSQL",
            "Optimized database queries and implemented caching strategies, reducing page load times by 60%",
          ],
        },
        {
          id: "3",
          company: "Fiserv",
          role: "Summer Intern",
          duration: "May 2022 - June 2022",
          responsibilities: [
            "Developed responsive frontend components and integrated RESTful APIs for various client projects",
            "Collaorated with designers to implement pixel-perfect UI designs and ensure cross-browser compatibility",
          ],
        },
      ],
    };
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getPortfolioData(): Promise<PortfolioData> {
    return this.portfolioData;
  }
}

export const storage = new MemStorage();
