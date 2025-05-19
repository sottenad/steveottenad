import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Steve Otten",
  description: "AI engineering projects and case studies by Steve Otten",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Projects & Case Studies
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
          A collection of my recent work in AI engineering, featuring practical applications, 
          experiments, and case studies in machine learning, natural language processing, and computer vision.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}