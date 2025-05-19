import Link from 'next/link';
import FadeIn from './FadeIn';

export default function Header() {
  return (
    <header className="bg-[var(--header)] text-[var(--header-text)] py-4 shadow-md">
      <div className="max-w-screen-lg mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-[var(--header-text)] hover:text-[var(--light-brown)] transition-colors">
          Steve Ottenad
        </Link>
        <nav className="flex gap-6">
          <Link 
            href="/" 
            className="text-[var(--header-text)] hover:text-[var(--light-brown)] font-medium transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/projects/" 
            className="text-[var(--header-text)] hover:text-[var(--light-brown)] font-medium transition-colors"
          >
            Projects
          </Link>
          <Link 
            href="/about/" 
            className="text-[var(--header-text)] hover:text-[var(--light-brown)] font-medium transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}