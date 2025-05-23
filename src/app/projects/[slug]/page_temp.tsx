import { projects } from "@/data/projects";
import Link from "next/link";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { readMarkdownFile } from "@/lib/markdown";
import ResponsiveImage from "@/components/ResponsiveImage";
import { PageParams, getProjectBySlug } from "./utils";

/**
 * Generate the static paths for all projects at build time
 */
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  // Find the project by slug
  const project = await getProjectBySlug(params);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  
  return {
    title: `${project.title} | Steve Ottenad`,
    description: project.description,
  };
}

/**
 * Project detail page
 */
export default async function ProjectPage({ params }: PageParams) {
  // Find the project by slug
  const project = await getProjectBySlug(params);
  
  // Handle not found
  if (!project) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-secondary mb-4">
          Project Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The project you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/projects/"
          className="btn-primary px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center"
        >
          View All Projects
        </Link>
      </div>
    );
  }
  
  // Load markdown content if available
  let markdownContent = null;
  if (project.caseStudyPath) {
    markdownContent = await readMarkdownFile(project.caseStudyPath);
  }
  
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li>
              <Link href="/projects/" className="hover:text-accent transition-colors">
                Projects
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li className="text-secondary font-medium">
              {project.title}
            </li>
          </ol>
        </nav>
        
        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="tag"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xl text-primary">
            {project.description}
          </p>
        </div>
        
        {/* Project Image */}
        <div className="relative aspect-video w-full rounded-xl mb-12 overflow-hidden">
          {project.image && project.image.endsWith('.png') ? (
            <ResponsiveImage 
              src={project.image}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary text-6xl font-medium">
              {project.title.charAt(0)}
            </div>
          )}
        </div>
        
        {/* Project Content */}
        <div className="max-w-none">
          {markdownContent ? (
            // Render markdown content for projects with case studies
            <div className="case-study-content">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  // Let custom CSS handle the styling through our case-study-content class
                  h1: ({...props}) => <h1 {...props} />,
                  h2: ({...props}) => <h2 {...props} />,
                  h3: ({...props}) => <h3 {...props} />,
                  p: ({...props}) => <p {...props} />,
                  ul: ({...props}) => <ul {...props} />,
                  ol: ({...props}) => <ol {...props} />,
                  li: ({...props}) => <li {...props} />,
                  blockquote: ({...props}) => <blockquote {...props} />,
                  code: ({...props}) => <code {...props} />,
                  a: ({...props}) => <a {...props} />,
                }}
              >
                {markdownContent || ''}
              </ReactMarkdown>
            </div>
          ) : (
            // Render default content for projects without case studies
            <div className="case-study-content">
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
            </div>
          )}
          
          <div className="mt-12 flex justify-center">
            <Link 
              href="/projects/"
              className="btn-secondary px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}