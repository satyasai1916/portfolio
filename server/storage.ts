import { type User, type InsertUser, type PortfolioData, type Blog } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getPortfolioData(): Promise<PortfolioData>;
  getBlogPostBySlug(slug: string): Promise<Blog | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private portfolioData: PortfolioData;

  constructor() {
    this.users = new Map();
    
    // Initialize portfolio data with professional sample content
    this.portfolioData = {
      name: "Satya Yallavula",
      title:"Software engineer",
      introduction: "Passionate developer with expertise in building robust scalable applications. I specialize in developing backend focused applications and contributing to scalable architectures. Always eager to learn new technologies and solve complex problems.",
      email: "yvssai04@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/venkata-satya-sai-yallavula-bb64821b1/",
      githubUrl: "https://github.com/satyasai1916",
      projects: [
        {
          id: "1",
          title: "The Typical MERN - CRUD Project",
          description: " Agile Notes - This was my first Full Stack project teaching me CRUD, A full-featured note-taking application with real-time synchronization, markdown support, and a clean UI. .",
          techStack: ["React", "Node.js", "MongoDB", "Express"],
          githubUrl: "https://github.com/satyasai1916/agile-notes",
          demoUrl: "",
        },
        {
          id: "2",
          title: "Problem Solver , Me",
          description: "My First ever Software Engineer Project. I built a simple UI for users to track COVID vaccination centers ",
          techStack: ["HTML", "CSS", "JavaScript"],
          githubUrl: "",
          demoUrl: "",
        },
        {
          id: "3",
          title: "As a Machine Learning Enthusiast",
          description: "Beautiful weather application featuring 7-day forecasts, interactive maps, severe weather alerts, and location-based recommendations. Clean UI with smooth animations.",
          techStack: ["React", "TypeScript", "OpenWeather API", "Recharts", "Framer Motion"],
          githubUrl: "",
          demoUrl: "",
        },
        {
          id: "4",
          title: "Everyone does a RAG",
          description: "Intelligent chatbot powered by machine learning for customer support automation. Features context-aware responses, sentiment analysis, and multi-language support.",
          techStack: ["Python", "FastAPI", "OpenAI", "Qdrant"],
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
      patents: [
        {
          id: "1",
          title: "System and Method for Real-Time Data Synchronization",
          applicationNumber: "US 2023/012345 A1",
          status: "Pending",
          url: "https://patents.google.com/patent/US2023012345A1",
        },
        {
          id: "2",
          title: "Decentralized Identity Verification",
          applicationNumber: "WO 2022/054321 A1",
          status: "Issued",
          url: "https://patents.google.com/patent/WO2022054321A1",
        },
      ],
      blogs: [
        {
          id: "1",
          slug: "micro-frontends-scalable-web-apps",
          title: "Micro-frontends: A Game-Changer for Scalable Web Apps",
          publication: "Developer Insights",
          date: "January 15, 2024",
          imageUrl: "https://via.placeholder.com/800x400?text=Micro-frontends",
          tags: ["Architecture", "Frontend", "Scalability"],
          content: `
# Micro-frontends: A Game-Changer for Scalable Web Apps

## Introduction
In today's fast-paced development landscape, building large and complex web applications can be challenging. Monolithic frontends often lead to slower development cycles, difficulties in scaling, and integration headaches. This is where the micro-frontend architecture comes into play, offering a revolutionary approach to building scalable and maintainable web applications.

## What are Micro-frontends?
Inspired by microservices, micro-frontends break down a monolithic frontend into smaller, independent, and loosely coupled applications. Each micro-frontend is typically owned by a separate team, can be developed using different technologies, and deployed independently. This paradigm shift allows teams to work autonomously, reducing dependencies and accelerating delivery.

## Benefits of Micro-frontends
- **Independent Development & Deployment**: Teams can develop, test, and deploy their parts of the application without affecting others.
- **Technology Agnostic**: Different micro-frontends can use different frameworks (e.g., React, Angular, Vue), allowing teams to choose the best tool for the job.
- **Improved Scalability**: Individual parts of the application can be scaled independently, optimizing resource usage.
- **Easier Maintenance**: Smaller codebases are easier to understand, maintain, and refactor.
- **Resilience**: A failure in one micro-frontend is less likely to bring down the entire application.

## Challenges
While micro-frontends offer many advantages, they also come with challenges such as increased operational complexity, consistent styling across different teams, and data sharing between micro-frontends. Careful planning and robust infrastructure are crucial for successful implementation.

## Conclusion
Micro-frontends represent a powerful architectural pattern for organizations looking to build resilient, scalable, and maintainable web applications. By empowering autonomous teams and fostering technology diversity, they pave the way for faster innovation and improved developer experience.
  `,
        },
        {
          id: "2",
          slug: "deep-dive-rust-high-performance-backends",
          title: "A Deep Dive into Rust for High-Performance Backends",
          publication: "Tech Forward",
          date: "October 28, 2023",
          imageUrl: "https://via.placeholder.com/800x400?text=Rust+Backend",
          tags: ["Rust", "Backend", "Performance", "Systems Programming"],
          content: `
# A Deep Dive into Rust for High-Performance Backends

## Why Rust for Backends?
Rust has rapidly gained traction as a language of choice for systems programming, and increasingly, for high-performance backend services. Its unique combination of memory safety without garbage collection, concurrency without data races, and exceptional performance makes it an ideal candidate for building robust and efficient server-side applications.

## Key Features Benefiting Backend Development
- **Memory Safety**: Rust's borrow checker eliminates entire classes of bugs (like null pointer dereferences and data races) at compile time, leading to more reliable servers.
- **Performance**: Close to C++ performance, Rust is perfect for services requiring low latency and high throughput.
- **Concurrency**: Rust's ownership model and type system makes concurrent programming safer and easier to reason about, preventing common pitfalls.
- **Strong Type System**: Catches errors early in the development cycle, improving code quality and reducing debugging time.
- **Growing Ecosystem**: While newer than other languages, Rust's ecosystem for web development (e.g., Axum, Actix-web, Tokio) is rapidly maturing.

## Use Cases
Rust excels in areas where performance and reliability are paramount, such as:
- **API Gateways**: Handling a massive number of requests efficiently.
- **Microservices**: Building lightweight, performant, and reliable services.
- **Game Servers**: Providing low-latency communication and complex logic.
- **Data Processing**: Building fast and memory-efficient data pipelines.

## Getting Started with Rust Backends
The journey to building a Rust backend often starts with understanding its core concepts like ownership, borrowing, and lifetimes. Frameworks like Actix-web and Axum provide powerful tools for building asynchronous web applications, while Tokio offers a robust runtime for concurrent operations.

## Conclusion
Rust offers a compelling proposition for backend development, especially for projects demanding high performance, security, and reliability. Its steep learning curve is often outweighed by the benefits of developing software that is robust, efficient, and a joy to maintain once the initial hurdles are overcome.
  `,
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

  async getBlogPostBySlug(slug: string): Promise<Blog | undefined> {
    return this.portfolioData.blogs.find((blog) => blog.slug === slug);
  }
}

export const storage = new MemStorage();
