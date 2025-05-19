import { projects } from "@/data/projects";

/**
 * Helper function to get project by slug. This helps isolate the params
 * usage in a way that better works with Next.js optimizations.
 */
export async function getProjectBySlug(slug: string | Promise<string>) {
  // Ensure slug is resolved
  const resolvedSlug = typeof slug === 'string' ? slug : await slug;
  
  // For static site generation, this doesn't need to be truly async,
  // but wrapping in Promise.resolve() helps Next.js understand it's a safe operation
  return Promise.resolve(projects.find(p => p.slug === resolvedSlug));
}