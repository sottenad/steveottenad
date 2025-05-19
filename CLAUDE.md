# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website built with Next.js 15, bootstrapped with `create-next-app`. The site showcases AI case studies and projects with a clean, beautiful design and requires no database.

### Purpose
- Showcase 4-6 recent AI projects with in-depth case studies
- Include an About Me section
- Provide links to GitHub and LinkedIn profiles
- Primary focus on highlighting projects and their details
- Generate a completely static site that can be deployed anywhere

### Tech Stack
- React 19
- TypeScript
- TailwindCSS 4
- ESLint 9
- Next.js static site generation (SSG)

## Commands

### Development

```bash
# Start the development server
npm run dev

# Build for production (generates static HTML/CSS/JS)
npm run build

# Start the production server (for testing the build)
npm run start

# Lint the codebase
npm run lint

# Export static site (for deployment)
npm run build && next expor
```

### Prerequisites

- Node.js 20+ installed
- Configure `next.config.ts` with `output: 'export'` to enable static site generation:
  ```typescript
  // next.config.ts
  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // Required for static export
    },
    // Ensure trailing slashes for proper static file linking
    trailingSlash: true,
  };

  export default nextConfig;
  ```
- Ensure all dynamic routes use `generateStaticParams` to pre-render paths at build time
- Avoid any components or features that require server-side functionality

## Architecture

### App Structure

This project follows Next.js 15's App Router pattern:

- `src/app/`: Contains the main application code
  - `layout.tsx`: Root layout component defining the HTML structure and app-wide providers
  - `page.tsx`: Main page component for the root route (homepage)
  - `globals.css`: Global styles including Tailwind imports and theme variables
  - `projects/`: Directory for project case studies
    - `[slug]/page.tsx`: Dynamic route for individual project pages
  - `about/page.tsx`: About Me page

### Key Features

- Completely static site with no database dependency
- Simple component architecture favoring function over complexity
- Responsive, modern design optimized for all devices
- Project showcase with featured images and descriptions
- Pre-rendered project pages with detailed case studies
- About Me section with professional background and skills
- Social media and professional profile links
- Light/dark mode support
- Uses Geist fonts from Next.js font system
- Uses Tailwind CSS for styling
- Follows the App Router pattern for routing
- TypeScript for type safety

### Import Aliases

The codebase uses path aliases for imports:
- `@/*` maps to `./src/*`

### Styling

- Uses Tailwind CSS through `@tailwindcss/postcss`
- Defines light/dark mode variables in `globals.css`
- Uses CSS variables for theme customization
- Clean, minimal aesthetic with focus on readability and project presentation
- Consistent spacing and typography for professional appearance

### Data Structure

- Project data stored as static TypeScript objects (in `/src/data/projects.ts`)
- No external API calls or database queries
- All content pre-rendered at build time
- Each project includes:
  - Title
  - Description
  - Slug (for URL routing)
  - Featured image (stored in `/public/images/`)
  - Technologies used
  - Case study content (can include markdown)
  - External links (GitHub, live demo, etc.)
- About data includes professional information and skills

### Component Architecture

- Simple, functional components with minimal state management
- Component files organized by feature rather than type
- Reusable UI components in `/src/components/`
- Layout components for consistent page structure
- Prefer static rendering over client-side data fetching
- Minimize JavaScript bundle size by avoiding large dependencies