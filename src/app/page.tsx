import Link from "next/link";
import { aboutMe } from "@/data/projects";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {aboutMe.name}
            </h1>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
              {aboutMe.role}
            </p>
            <p className="mt-6 text-gray-600 dark:text-gray-400">
              {aboutMe.bio}
            </p>
            <div className="mt-8">
              <Link
                href="/projects/"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <AboutSection />
      
      {/* Projects Section */}
      <ProjectsSection />
    </>
  );
}
