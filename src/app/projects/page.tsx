import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Steve Ottenad",
  description: "AI engineering projects and case studies by Steve Ottenad",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <FadeIn direction="up" duration={0.6}>
          <h1 className="text-3xl font-bold text-secondary mb-8">
            Projects & Case Studies
          </h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            A collection of my recent work in AI engineering, featuring practical applications, 
            experiments, and case studies in machine learning, natural language processing, and computer vision.
          </p>
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
    </div>
  );
}