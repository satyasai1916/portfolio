import { z } from "zod";

// Portfolio Data Schemas

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  techStack: z.array(z.string()),
  githubUrl: z.string().optional(),
  demoUrl: z.string().optional(),
});

export const skillCategorySchema = z.object({
  category: z.string(),
  skills: z.array(z.string()),
});

export const experienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  role: z.string(),
  duration: z.string(),
  responsibilities: z.array(z.string()),
});

export const patentSchema = z.object({
  id: z.string(),
  title: z.string(),
  applicationNumber: z.string(),
  status: z.string(),
  url: z.string().optional(),
});

export const blogSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  publication: z.string(),
  date: z.string(),
  url: z.string().optional(),
  imageUrl: z.string().optional(),
  tags: z.array(z.string()),
  content: z.string(),
});

export const portfolioDataSchema = z.object({
  name: z.string(),
  title: z.string(),
  introduction: z.string(),
  email: z.string().email(),
  linkedinUrl: z.string().optional(),
  githubUrl: z.string().optional(),
  projects: z.array(projectSchema),
  skillCategories: z.array(skillCategorySchema),
  experiences: z.array(experienceSchema),
  patents: z.array(patentSchema),
  blogs: z.array(blogSchema),
});

// TypeScript types
export type Project = z.infer<typeof projectSchema>;
export type SkillCategory = z.infer<typeof skillCategorySchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Patent = z.infer<typeof patentSchema>;
export type Blog = z.infer<typeof blogSchema>;
export type PortfolioData = z.infer<typeof portfolioDataSchema>;
