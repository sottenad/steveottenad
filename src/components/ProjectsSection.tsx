import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import FadeIn from './FadeIn';

export default function ProjectsSection() {
  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-20">
      <div className="max-w-screen-lg mx-auto px-4">
        <FadeIn direction="up" duration={0.6}>
          <h2 className="text-2xl font-bold text-secondary mb-8">Recent Projects</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn 
              key={project.id}
              className="h-full"
              direction="up"
              delay={0.1 * index}
              distance={15}
            >
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}