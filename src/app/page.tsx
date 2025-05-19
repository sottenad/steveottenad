import Link from "next/link";
import { aboutMe } from "@/data/projects";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary">
              {aboutMe.name}
            </h1>
            <p className="mt-4 text-xl text-primary">
              {aboutMe.role}
            </p>
            <p className="mt-6 text-muted-foreground">
              {aboutMe.bio}
            </p>
            <div className="mt-8">
              <Link
                href="/projects/"
                className="btn-primary px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* About Section */}
      <AboutSection />
    </>
  );
}
