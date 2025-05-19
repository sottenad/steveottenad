import { projects } from "@/data/projects";

/**
 * The proper type for Next.js 15 dynamic route parameters
 */
export interface PageParams {
  params: Promise<{ slug: string }>;
}

/**
 * Find a project by slug
 */
export async function getProjectBySlug(params: PageParams['params']) {
  const { slug } = await params;
  return projects.find((project) => project.slug === slug);
}