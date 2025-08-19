# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static portfolio website built with Next.js 15 showcasing AI case studies and projects. The site is designed to be completely static, requiring no database or server-side functionality.

### Tech Stack
- **Next.js 15** with App Router and static export (`output: 'export'`)
- **React 19** with TypeScript
- **Tailwind CSS 4** via `@tailwindcss/postcss`
- **ESLint 9** for code quality
- **Sharp** for image optimization
- **React Markdown** with GitHub Flavored Markdown support

## Commands

```bash
# Development
npm run dev                # Start dev server (http://localhost:3000)
npm run lint              # Run ESLint

# Building
npm run build             # Build static site (generates /out directory)
npm run start             # Test production build locally
npm run build:optimized   # Optimize images, then build

# Image Optimization
npm run optimize-images   # Generate responsive WebP images
```

## Architecture

### File Structure
- `src/app/` - Next.js App Router pages and layouts
  - `page.tsx` - Homepage
  - `projects/[slug]/page.tsx` - Dynamic project pages
  - `about/page.tsx` - About page
  - `globals.css` - Global styles and CSS variables
- `src/components/` - Reusable React components
  - `ResponsiveImage.tsx` - Handles optimized image loading
- `src/data/` - Static content
  - `projects.ts` - Project metadata and descriptions
  - `*.md` - Markdown case studies
- `src/lib/` - Utility functions
- `scripts/optimize-images.js` - Image optimization script
- `public/images/` - Original images
- `public/images/optimized/` - Generated responsive images

### Key Implementation Details

1. **Static Site Generation**
   - Configured via `next.config.ts` with `output: 'export'`
   - All dynamic routes use `generateStaticParams()` for pre-rendering
   - Images unoptimized at build time (`images.unoptimized: true`)
   - Trailing slashes enabled for proper static file serving

2. **Image Optimization Workflow**
   - Place originals in `/public/images/`
   - Run `npm run optimize-images` to generate:
     - WebP versions at 4 sizes (xs: 320px, sm: 640px, md: 960px, lg: 1280px)
     - Fallback original format at medium size
   - ResponsiveImage component automatically selects appropriate version

3. **Project Data Structure**
   - Projects defined in `src/data/projects.ts` with:
     - slug (URL parameter)
     - title, description, technologies
     - image paths (relative to `/images/`)
     - GitHub/demo links
   - Case studies stored as separate markdown files

4. **Styling Approach**
   - Tailwind CSS with custom CSS variables in `globals.css`
   - Light/dark mode support via CSS variables
   - Geist font from Next.js font system
   - Mobile-first responsive design

### Import Alias
- `@/*` maps to `./src/*`