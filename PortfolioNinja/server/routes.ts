import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for templates
  app.get("/api/templates", async (req, res) => {
    try {
      // In a real implementation, this would fetch from a database
      // For this demo, we'll return the data from the client-side data
      // as we're using in-memory storage
      res.json({ message: "Success", templates: [] });
    } catch (error) {
      console.error("Error fetching templates:", error);
      res.status(500).json({ message: "Failed to fetch templates" });
    }
  });

  app.get("/api/templates/:id", async (req, res) => {
    try {
      const { id } = req.params;
      // In a real implementation, this would fetch a specific template by ID
      res.json({ message: "Success", template: null });
    } catch (error) {
      console.error("Error fetching template:", error);
      res.status(500).json({ message: "Failed to fetch template" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
