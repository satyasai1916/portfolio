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
      title: "Software Engineer",
      strengths: ["Product", "AI", "Backend", "Scalability"],
      introduction: "Software developer with expertise in building and scaling high-throughput applications. I specialize in designing and contributing to distributed systems and architectures. Always eager to learn new technologies and solve complex problems. I love converting business problems into software solutions by directly interacting with stakeholders — that's what I do best. Experience in Docker, K8s environments, and debugging production incidents.",
      email: "yvssai04@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/venkata-satya-sai-yallavula-bb64821b1/",
      githubUrl: "https://github.com/satyasai1916",
      projects: [
        {
          id: "1",
          title: "Where it all started — Agile Notes",
          description: "My first full-stack rodeo. CRUD, auth, the whole MERN stack — this is where I learned that shipping beats perfecting.",
          techStack: ["React", "Node.js", "MongoDB", "Express"],
          githubUrl: "https://github.com/satyasai1916/Agile-Notes",
          demoUrl: "",
        },
        {
          id: "2",
          title: "Problem solver, me",
          description: "My first-ever software project — a simple UI to help people find COVID vaccination centers nearby. Small scope, real impact.",
          techStack: ["HTML", "CSS", "JavaScript"],
          githubUrl: "",
          demoUrl: "",
        },
        {
          id: "3",
          title: "My ML curiosity phase",
          description: "Stock prices, LSTM models, and the classic 'what if I could predict the market?' experiment. Spoiler: markets are hard.",
          techStack: ["Python", "TensorFlow", "Pandas", "NumPy"],
          githubUrl: "https://github.com/satyasai1916/Stock-Prediction-using-LSTM",
          demoUrl: "",
        },
        {
          id: "4",
          title: "Everyone does a RAG",
          description: "Built an intelligent chatbot with context-aware responses and vector search. Never pushed to GitHub — it lives on my machine and in production memory.",
          techStack: ["Python", "FastAPI", "OpenAI", "Qdrant"],
          githubUrl: "",
        },
        {
          id: "5",
          title: "Streaming LLMs before it was cool",
          description: "Multi-provider LLM chat with real-time streaming and inference logging. Because if you're going to call GPT, you should know what it cost.",
          techStack: ["TypeScript", "React", "Node.js", "OpenAI"],
          githubUrl: "https://github.com/satyasai1916/llm-inference-logger",
          demoUrl: "",
        },
        {
          id: "6",
          title: "C++ vs Python — who wins?",
          description: "FastIndex — text parsing and search performance benchmarked across C++ and Python. Because sometimes you need to know if your language choice is the bottleneck.",
          techStack: ["C++", "Python", "Algorithms"],
          githubUrl: "https://github.com/satyasai1916/FastIndex",
          demoUrl: "",
        },
      ],
      skillCategories: [

        {
          category: "Backend",
          skills: ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB", "REST APIs","Django"],
        },
        {
          category: "DevOps & Tools",
          skills: ["Git", "Docker", "Infra", "CI/CD", "Linux", "Kubernetes"],
        },
        {
          category: "Other",
          skills: ["Agile/Scrum", "Low Level Design", "System Design", "Performance Optimization"],
        },
      ],
      experiences: [
        {
          id: "1",
          company: "Rakuten Mobile Inc",
          role: "Software Engineer (BBB grade)",
          duration: "June 2026 - Present",
          responsibilities: [
            "Promoted to BBB grade — own the full product lifecycle from design and planning through development, testing, and acting on customer feedback for telecom optimization platforms at 100K+ cells serving 10M+ subscribers",
            "Drive technical direction and cross-team alignment as a product-minded engineer, balancing reliability, subscriber experience, and delivery across distributed systems",
            "Mentor peers on production best practices and lead initiatives that scale network optimization with measurable impact on customer experience",
          ],
        },
        {
          id: "2",
          company: "Rakuten Mobile Inc",
          role: "Software Engineer",
          duration: "April 2025 - June 2026",
          responsibilities: [
            "Designed and shipped distributed optimization platforms integrated with highly reliable telecom systems — optimizing network performance across 1K+ cells and improving experience for 100K+ subscribers",
            "Shifted from big data engineering to building and scaling microservice architectures from scratch, leading a greenfield application with multiple services",
            "Built and deployed microservices powering distributed optimization platforms, from service design through production rollout on Kubernetes",
          ],
        },
        {
          id: "3",
          company: "Rakuten Mobile Inc",
          role: "Software Engineer",
          duration: "March 2024 - April 2025",
          responsibilities: [
            "Built ETL pipelines processing terabytes of telecom data, leveraging columnar databases including BigQuery and ClickHouse for high-throughput analytics",
            "Developed RAG-based agents for internal knowledge retrieval and automation across large-scale datasets",
          ],
        },
        {
          id: "4",
          company: "Fiserv",
          role: "Summer Intern",
          duration: "May 2022 - June 2022",
          responsibilities: [
            "Python automations and internal tooling",
          ],
        },
      ],
      patents: [
        {
          id: "1",
          title: "Explainability Framework for Analyzing Mobile Subscriber Data Usage Reduction Due to Location-Based Network Coverage Variations",
          applicationNumber: "US ---",
          status: "Under Review",
        },

      ],
     
  blogs: [
    {
      id: "1",
      slug: "kubernetes-beyond-basics-production-lessons",
      title: "Kubernetes Beyond the Basics: Production Lessons from Running Real Systems",
      publication: "- Satya Yallavula",
      date: "June 25, 2025",
      imageUrl: "https://via.placeholder.com/800x400?text=Kubernetes+Production",
      tags: ["Kubernetes", "DevOps", "Distributed Systems", "Scalability"],
      content: `
# Kubernetes Beyond the Basics: Production Lessons from Running Real Systems

## Introduction
Kubernetes looks simple in demos — deploy a container, scale replicas, expose a service. But production reality is very different. When traffic spikes, pods crash, nodes die, and deployments go wrong, you truly understand distributed systems.

Here are lessons from running Kubernetes clusters serving real production workloads.

## Real Production Scenario

In one of our backend systems, we had an API service handling ~20k requests per minute during peak hours. Initially, everything worked well — until we pushed a version with an unoptimized database query.

CPU spiked.
Pods started restarting.
HPA kept scaling replicas.
Database connections got exhausted.

Instead of solving the problem, autoscaling amplified it.

### What We Learned

- Horizontal Pod Autoscaler cannot fix bad application logic.
- Resource limits must be tuned carefully.
- Liveness and readiness probes must reflect real health — not just “container is running”.
- Pod disruption budgets protect availability during node upgrades.

## Designing for Resilience

We improved the system by:

- Adding connection pooling limits.
- Introducing circuit breakers at the application layer.
- Using rolling updates with maxUnavailable=0 for zero downtime.
- Implementing proper resource requests to prevent noisy neighbor issues.

## Observability Matters

We added:
- Request latency percentiles (p95, p99)
- Error rate alerts tied to SLOs
- Pod restart monitoring
- Node-level memory pressure alerts

Once observability improved, debugging became predictable instead of chaotic.

## Conclusion

Kubernetes is not just container orchestration — it's distributed systems management at scale. Production stability comes from understanding failure modes, not just YAML configuration.
      `,
    },
    {
      id: "2",
      slug: "building-ml-models-for-production-systems",
      title: "Building ML Models for Production: Beyond Jupyter Notebooks",
      publication: "- Satya Yallavula",
      date: "October 28, 2025",
      imageUrl: "https://via.placeholder.com/800x400?text=ML+Production",
      tags: ["Machine Learning", "MLOps", "Distributed Systems", "Backend"],
      content: `
# Building ML Models for Production: Beyond Jupyter Notebooks

## Introduction
Training a machine learning model is the easy part. Making it reliable in production is where engineering begins.

Production ML systems must handle latency constraints, model drift, scaling challenges, and monitoring — just like any distributed service.

## Real Production Scenario

We built a demand forecasting model to predict traffic patterns for an internal analytics platform.

The model performed well offline with high accuracy. But once deployed:

- Predictions were slow under concurrent requests.
- Feature mismatches occurred due to schema changes.
- Data distribution shifted after a seasonal campaign.

Accuracy dropped significantly.

## What Changed in Production

We introduced:

- A dedicated model serving layer with autoscaling.
- Feature validation at ingestion time.
- Versioned models with rollback capability.
- Shadow testing before full rollout.

We also added monitoring for:
- Prediction latency
- Drift detection
- Confidence score anomalies

## Key Lessons

- Training and serving environments must be identical.
- Latency budgets matter more than small accuracy gains.
- Model monitoring is as important as application monitoring.
- Retraining pipelines must be automated.

## Conclusion

ML in production is not about algorithms — it's about reliability, observability, and lifecycle management. A slightly less accurate model that is stable and scalable is often more valuable than a fragile high-accuracy one.
      `,
    },
    {
      id: "3",
      slug: "designing-distributed-systems-at-scale",
      title: "Designing Distributed Systems at Scale: Lessons from Production",
      publication: "- Satya Yallavula",
      date: "February 10, 2026",
      imageUrl: "https://via.placeholder.com/800x400?text=Distributed+Systems",
      tags: ["Distributed Systems", "Scalability", "Architecture", "Backend"],
      content: `
# Designing Distributed Systems at Scale: Lessons from Production

## Real Production Scenario

We operated a microservices-based backend handling user analytics events from multiple regions.

At peak traffic (~50k events/sec), we faced:

- Message broker lag
- Consumer crashes due to memory spikes
- Partial data inconsistency between services

A single slow consumer created backlog that cascaded across downstream services.

## What We Improved

- Implemented backpressure mechanisms.
- Partitioned traffic intelligently.
- Made all consumers idempotent.
- Introduced dead-letter queues for poison messages.
- Applied rate limiting at ingestion points.

We also shifted certain workflows from synchronous calls to asynchronous event-driven processing to reduce tight coupling.

## Scalability and Trade-offs

We accepted eventual consistency for analytics data to maintain availability. Strict consistency would have reduced throughput significantly.

## Conclusion

Distributed systems fail in subtle ways — rarely through total crashes, but through slow degradation. Designing for graceful failure and recovery is the real mark of production maturity.
      `,
    },
    {
      id: "4",
      slug: "event-driven-architecture-with-message-brokers",
      title: "Event-Driven Architecture: Building Reliable Systems with Message Brokers",
      publication: "- Satya Yallavula",
      date: "February 18, 2026",
      imageUrl: "https://via.placeholder.com/800x400?text=Event-Driven+Architecture",
      tags: ["Event-Driven Architecture", "Kafka", "Scalability", "Microservices"],
      content: `
# Event-Driven Architecture: Building Reliable Systems with Message Brokers

## Real Production Scenario

We migrated a tightly coupled payment-processing workflow into an event-driven architecture.

Previously:
- Checkout service directly called payment, notification, and analytics services.
- A slow dependency increased user-facing latency.
- Failures cascaded easily.

After migration:
- Checkout emitted an event.
- Downstream services consumed independently.
- Failures in analytics no longer affected user checkout flow.

## Challenges We Faced

- Handling duplicate events.
- Ensuring proper partition key strategy.
- Monitoring consumer lag.
- Managing schema evolution without breaking consumers.

We implemented:
- Idempotent consumers.
- Schema versioning.
- Lag-based autoscaling.
- Dead-letter topics for failed events.

## Key Takeaway

Event-driven systems increase resilience but require strong operational maturity. Observability and disciplined event contracts are essential.

## Conclusion

When applied thoughtfully, event-driven architecture allows systems to scale independently, tolerate failures gracefully, and evolve without constant coordination between teams.
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
