import { projects } from "@/data/projects";
import Link from "next/link";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { readMarkdownFile } from "@/lib/markdown";
import ResponsiveImage from "@/components/ResponsiveImage";

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Add async to make Next.js happy with params
  const slug = params.slug;
  const project = projects.find((p) => p.slug === slug);
  
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

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  // Add async to make Next.js happy, and ensure params is properly awaited
  const slug = params.slug;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-secondary mb-4">
          Project Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The project you're looking for doesn't exist or has been moved.
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
        <div className="prose prose-stone dark:prose-invert max-w-none">
          {project.caseStudyPath ? (
            // Render markdown content for projects with case studies
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-secondary mt-8 mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-secondary mt-8 mb-4" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-semibold text-secondary mt-6 mb-3" {...props} />,
                p: ({node, ...props}) => <p className="mb-4 text-muted-foreground" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4 text-muted-foreground" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-4 text-muted-foreground" {...props} />,
                li: ({node, ...props}) => <li className="mb-1" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-primary/30 pl-4 italic my-4" {...props} />,
                code: ({node, ...props}) => <code className="bg-muted px-1 py-0.5 rounded font-mono text-sm" {...props} />,
                a: ({node, ...props}) => <a className="text-primary hover:text-accent underline" {...props} />,
              }}
            >
              {await readMarkdownFile(project.caseStudyPath) || ''}
            </ReactMarkdown>
          ) : (
            // Render default content for projects without case studies
            <>
              <h2 className="text-secondary">Project Overview</h2>
              <p className="text-muted-foreground">
                This is a sample project content for {project.title}. In a real implementation, 
                this would contain the full case study with details about the project objectives, 
                approach, implementation, results, and learnings.
              </p>
              
              <h2 className="text-secondary">Challenge</h2>
              <p className="text-muted-foreground">
                Description of the main challenge or problem that this project addresses would go here.
              </p>
              
              <h2 className="text-secondary">Solution</h2>
              <p className="text-muted-foreground">
                Details about the approach and solution implemented would be described in this section.
              </p>
              
              <h2 className="text-secondary">Results</h2>
              <p className="text-muted-foreground">
                The outcomes and results achieved from the project would be highlighted here.
              </p>
              
              <h2 className="text-secondary">Technologies Used</h2>
              <ul className="text-muted-foreground">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </>
          )}
          
          <div className="mt-12 not-prose">
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