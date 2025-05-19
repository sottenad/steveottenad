import Link from 'next/link';
import { Project } from '@/data/projects';
import ResponsiveImage from './ResponsiveImage';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}/`} className="group h-full">
      <div className="card hover:border-primary flex flex-col h-full">
        <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
          {project.image && project.image.endsWith('.png') ? (
            <ResponsiveImage 
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            /* Placeholder for projects without images */
            <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary text-4xl font-medium">
              {project.title.charAt(0)}
            </div>
          )}
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-medium text-secondary group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground flex-grow">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="tag"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}