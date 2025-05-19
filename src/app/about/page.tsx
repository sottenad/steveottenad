import { aboutMe } from "@/data/projects";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Steve Otten",
  description: "About Steve Otten - AI Engineer & Researcher",
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-3xl font-bold text-secondary mb-8">
          About Me
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="aspect-square w-full max-w-xs rounded-xl bg-primary/10 flex items-center justify-center text-primary text-6xl font-medium">
              {aboutMe.name.charAt(0)}
            </div>
            
            <div className="mt-8 flex flex-col gap-4">
              <Link 
                href={aboutMe.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-primary hover:text-accent transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </Link>
              <Link 
                href={aboutMe.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-primary hover:text-accent transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              {aboutMe.name}
            </h2>
            <p className="text-xl text-primary mb-6">
              {aboutMe.role}
            </p>
            
            <div className="prose prose-stone dark:prose-invert">
              <p className="mb-6 text-muted-foreground">
                {aboutMe.bio}
              </p>
              <p className="mb-6 text-muted-foreground">
                I specialize in developing practical applications of large language models, 
                with a focus on creating innovative solutions at the intersection of NLP, 
                computer vision, and user experience design.
              </p>
              <p className="text-muted-foreground">
                My recent work has centered on multimodal applications, fine-tuning models for 
                specific domains, and developing rigorous evaluation frameworks for AI systems. 
                I'm particularly interested in building tools that enable creative applications 
                of AI technology.
              </p>
              
              <h3 className="text-xl font-semibold mt-12 mb-4 text-secondary">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Large Language Models", "Model Fine-tuning", "RAG Systems", "Multimodal AI", 
                  "Evaluation Frameworks", "Python", "TypeScript", "TensorFlow", "PyTorch", 
                  "Next.js", "React"].map((skill) => (
                  <span
                    key={skill}
                    className="tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}