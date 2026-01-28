# DevFolioKit

A modern, single-page portfolio template designed for developers. It is built with a flexible full-stack architecture and is easy to customize.

## Features

-   A clean, single-page layout.
-   Sections for:
    -   Hero / Biography
    -   Projects Showcase
    -   Categorized Skills
    -   Work Experience
    -   Contact Information
-   Content is managed from a central data source, making updates simple.
-   Built with a decoupled frontend and backend for clear separation of concerns.

## Tech Stack

-   **Frontend**: React, Vite, TypeScript, Tailwind CSS
-   **Backend**: Node.js, Express, TypeScript
-   **Database/ORM**: Drizzle (with an in-memory store by default)
-   **Schema**: Zod for type-safe data validation

## Getting Started

### 1. Setup and Installation

First, clone the repository to your local machine:

```bash
git clone <your-repository-url>
```

Navigate into the project directory and install the dependencies:

```bash
npm install
```

### 2. Running in Development

To start the development server for both the client and backend, run:

```bash
npm run dev
```

The frontend will be available at the address shown in your terminal (typically `http://localhost:5173`). The backend API runs concurrently.

## How to Customize Your Portfolio

All of your personal information is stored in a single, easy-to-edit file.

**File to Edit**: `server/storage.ts`

Inside this file, you will find the `portfolioData` object within the `MemStorage` class. Simply modify the contents of this object to update your portfolio.

```typescript
// Example from server/storage.ts

this.portfolioData = {
  name: "Your Name",
  title: "Your Professional Title",
  introduction: "A brief introduction about yourself.",
  email: "your.email@example.com",
  linkedinUrl: "https://linkedin.com/in/yourprofile",
  githubUrl: "https://github.com/yourusername",
  projects: [
    {
      name: "My Awesome Project",
      description: "A description of what this project does.",
      // ... other project fields
    },
  ],
  skillCategories: [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python"],
    },
  ],
  experiences: [
    {
      company: "A Great Company",
      role: "Software Engineer",
      // ... other experience fields
    },
  ],
};
```

For a reference on the data structure (e.g., what fields are available for projects or experiences), see `shared/schema.ts`.
