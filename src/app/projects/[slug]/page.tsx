import { projects } from "@/data/projects";
import Link from "next/link";
import type { Metadata } from "next";

// Generate static paths for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project page
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  
  return {
    title: `${project.title} | Steve Otten`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Project Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/projects/"
          className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          View All Projects
        </Link>
      </div>
    );
  }
  
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li>
              <Link href="/projects/" className="hover:text-blue-600 dark:hover:text-blue-400">
                Projects
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li className="text-gray-900 dark:text-white font-medium">
              {project.title}
            </li>
          </ol>
        </nav>
        
        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
        </div>
        
        {/* Project Image */}
        <div className="relative aspect-video w-full bg-gray-200 dark:bg-gray-800 rounded-xl mb-12 flex items-center justify-center text-gray-400 dark:text-gray-600 text-6xl font-medium">
          {project.title.charAt(0)}
        </div>
        
        {/* Project Content - Sample */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>Project Overview</h2>
          <p>
            This is a sample project content for {project.title}. In a real implementation, 
            this would contain the full case study with details about the project objectives, 
            approach, implementation, results, and learnings.
          </p>
          
          <h2>Challenge</h2>
          <p>
            Description of the main challenge or problem that this project addresses would go here.
          </p>
          
          <h2>Solution</h2>
          <p>
            Details about the approach and solution implemented would be described in this section.
          </p>
          
          <h2>Results</h2>
          <p>
            The outcomes and results achieved from the project would be highlighted here.
          </p>
          
          <h2>Technologies Used</h2>
          <ul>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          
          <div className="mt-12 not-prose">
            <Link 
              href="/projects/"
              className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}