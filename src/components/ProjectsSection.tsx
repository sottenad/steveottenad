import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}