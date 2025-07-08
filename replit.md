# Personal Portfolio Website

## Overview

This is a full-stack personal portfolio website for Bhanuja Ainary, showcasing professional experience as an AI Engineer and Software Developer. The application is built with React frontend, Express.js backend, and uses modern web technologies to create an interactive, responsive portfolio experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth scrolling and interactive animations
- **Routing**: Wouter for client-side navigation
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Hot reload with tsx for development server
- **Production**: Compiled with esbuild for optimal bundle size

### Database & ORM
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Connection**: Neon Database serverless driver
- **Schema**: Centralized in shared directory for type safety

## Key Components

### Portfolio Sections
1. **Hero Section**: Professional introduction with contact links
2. **About**: Educational background and professional summary
3. **Experience**: Work history at HPCC Lab, UNT, and Presidio
4. **Projects**: Featured projects including Audo-Sight, Finance Fraud Detection, and Zhuttle
5. **Research**: Academic publications and achievements
6. **Contact**: Interactive contact form with toast notifications

### UI Components
- Comprehensive shadcn/ui component library
- Responsive navigation with active section highlighting
- Smooth scroll animations and viewport-based triggers
- Mobile-responsive design with hamburger menu
- Toast notifications for user feedback

### Storage Interface
- Abstract storage interface supporting both memory and database storage
- User management with CRUD operations
- Prepared for session management and authentication

## Data Flow

1. **Client Rendering**: React components render portfolio sections
2. **Smooth Scrolling**: Custom hooks manage scroll position and active section highlighting
3. **Animation Triggers**: Framer Motion animations triggered by viewport intersection
4. **Form Handling**: Contact form with client-side validation and toast feedback
5. **API Ready**: Backend routes prepared for future dynamic content

## External Dependencies

### UI & Styling
- **@radix-ui/***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **framer-motion**: Animation library
- **lucide-react**: Icon library

### Backend & Database
- **drizzle-orm**: Type-safe ORM
- **@neondatabase/serverless**: PostgreSQL connection
- **express**: Web application framework

### Development Tools
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling

## Deployment Strategy

### Development
- Vite development server with hot module replacement
- Express server with automatic restart via tsx
- Database migrations via Drizzle Kit
- Replit integration for cloud development

### Production Build
1. Frontend: Vite builds React app to `dist/public`
2. Backend: esbuild compiles Express server to `dist/index.js`
3. Database: Drizzle migrations ensure schema consistency
4. Environment: NODE_ENV=production for optimized runtime

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: development/production mode switching
- **REPL_ID**: Replit-specific features when deployed on Replit

## Changelog

```
Changelog:
- July 08, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```