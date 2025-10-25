import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Portfolio API endpoint
  app.get("/api/portfolio", async (_req, res) => {
    try {
      const portfolioData = await storage.getPortfolioData();
      res.json(portfolioData);
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
      res.status(500).json({ error: "Failed to fetch portfolio data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
