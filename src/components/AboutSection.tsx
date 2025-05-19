import Link from 'next/link';
import { aboutMe } from '@/data/projects';

export default function AboutSection() {
  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-2xl font-bold text-secondary mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/3">
            <div className="aspect-square w-48 h-48 rounded-full bg-primary/20 mx-auto md:mx-0 flex items-center justify-center text-primary text-4xl font-medium">
              {aboutMe.name.charAt(0)}
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold text-secondary">{aboutMe.name}</h3>
            <p className="mt-1 text-lg text-primary">{aboutMe.role}</p>
            <p className="mt-4 text-muted-foreground">{aboutMe.bio}</p>
            <div className="mt-6 flex gap-4">
              <Link 
                href={aboutMe.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </Link>
              <Link 
                href={aboutMe.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}