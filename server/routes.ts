import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Portfolio API endpoint
  app.get("/api/portfolio", async (_req, res) => {
    try {
      const portfolioData = await storage.getPortfolioData();
      
      // Create a lightweight version of blogs without the content
      const lightweightBlogs = portfolioData.blogs.map(({ content, ...rest }) => rest);

      const lightweightPortfolioData = {
        ...portfolioData,
        blogs: lightweightBlogs,
      };

      res.json(lightweightPortfolioData);
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
      res.status(500).json({ error: "Failed to fetch portfolio data" });
    }
  });

  // Blog post API endpoint
  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const blogPost = await storage.getBlogPostBySlug(slug);

      if (blogPost) {
        res.json(blogPost);
      } else {
        res.status(404).json({ error: "Blog post not found" });
      }
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
