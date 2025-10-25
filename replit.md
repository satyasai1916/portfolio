# Developer Portfolio Website

## Overview

This is a modern, responsive developer portfolio website built to showcase professional experience, projects, and technical skills. The application features a clean, minimalist design inspired by contemporary developer portfolios (Linear, Vercel) with an emphasis on clarity, professional polish, and strategic visual elements. The portfolio is a single-page application with smooth scrolling navigation between sections including hero/introduction, featured projects, skills & technologies, work experience, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR and optimized production builds
- Client-side routing implemented with Wouter for lightweight navigation

**UI Component Library:**
- shadcn/ui components (Radix UI primitives) for accessible, customizable UI elements
- Tailwind CSS for utility-first styling with a custom design system
- Custom theme system supporting light/dark modes through CSS variables
- Typography system using Inter (primary) and JetBrains Mono (code/technical content) from Google Fonts

**State Management:**
- TanStack Query (React Query) for server state management, data fetching, and caching
- Local component state with React hooks for UI interactions

**Design System:**
- Comprehensive spacing system using Tailwind units (2, 4, 6, 8, 12, 16, 20, 24)
- Responsive grid layouts with mobile-first breakpoints
- Custom CSS variables for colors, borders, and elevation states
- Consistent shadow and border treatments for depth hierarchy

### Backend Architecture

**Server Framework:**
- Express.js running on Node.js for the HTTP server
- ESM (ES Modules) throughout the codebase for modern JavaScript module support
- Custom middleware for request logging and JSON response capturing

**API Structure:**
- RESTful API design with a single primary endpoint: `/api/portfolio`
- Portfolio data stored in-memory through a storage abstraction layer (IStorage interface)
- Separation of concerns: routes definition, storage implementation, and server setup are modular

**Data Layer:**
- Storage abstraction pattern (IStorage interface) allowing for future database integration
- Currently implemented with MemStorage (in-memory storage) containing sample portfolio data
- Zod schemas for runtime type validation and TypeScript type generation
- Shared schema definitions between client and server ensuring type consistency

### Data Storage Solutions

**Current Implementation:**
- In-memory storage with TypeScript interfaces for type safety
- Portfolio data structure includes: personal information, projects (with tech stack, GitHub/demo URLs), skill categories, and work experience

**Database Preparation:**
- Drizzle ORM configured for PostgreSQL integration
- Database configuration ready with connection via DATABASE_URL environment variable
- Migration system set up with Drizzle Kit (migrations output to `./migrations` directory)
- Schema location: `shared/schema.ts` for easy migration when moving to persistent storage

**Data Models:**
- `PortfolioData`: Top-level container with personal info and collections
- `Project`: Individual project entries with title, description, tech stack, and links
- `SkillCategory`: Grouped technical skills by category
- `Experience`: Work experience entries with company, role, duration, and responsibilities

### Authentication and Authorization

Currently not implemented - the portfolio is a public-facing website without user authentication. The architecture supports future addition of admin authentication for content management.

### Development Environment

**Replit Integration:**
- Custom Vite plugins for Replit-specific features (runtime error overlay, cartographer, dev banner)
- Development-only plugins conditionally loaded based on NODE_ENV and REPL_ID
- Asset aliasing configured for attached assets directory

**Build Process:**
- Development: `tsx` for running TypeScript server with hot reload
- Production build: Vite builds client bundle, esbuild bundles server code
- Type checking: TypeScript compiler in noEmit mode
- Database migrations: Drizzle Kit push command for schema synchronization

## External Dependencies

**UI Framework & Components:**
- React & React DOM (v18+) - Core framework
- @radix-ui/* packages - Accessible UI primitives for all interactive components
- Tailwind CSS & PostCSS - Utility-first styling framework
- class-variance-authority & clsx - Component variant management and conditional classes
- Lucide React - Icon library for consistent iconography

**Data Fetching & State:**
- @tanstack/react-query - Server state management and data synchronization
- Wouter - Lightweight client-side routing

**Backend Services:**
- Express.js - Web application framework
- @neondatabase/serverless - PostgreSQL driver for Neon database compatibility
- Drizzle ORM - Type-safe database ORM and query builder
- connect-pg-simple - PostgreSQL session store (prepared for future authentication)

**Validation & Type Safety:**
- Zod - Runtime schema validation and type inference
- drizzle-zod - Integration between Drizzle ORM and Zod schemas
- TypeScript - Static type checking across the entire codebase

**Build Tools:**
- Vite - Frontend build tool and dev server
- esbuild - Fast JavaScript/TypeScript bundler for server code
- tsx - TypeScript execution for development
- @replit/vite-plugin-* - Replit-specific development enhancements

**Third-Party Services (Prepared):**
- Google Fonts API - Typography (Inter, JetBrains Mono)
- Neon Database - Serverless PostgreSQL (configured but not yet connected)

**Form & UI Utilities:**
- react-hook-form & @hookform/resolvers - Form state management and validation
- date-fns - Date manipulation and formatting
- embla-carousel-react - Carousel/slider functionality
- cmdk - Command palette component