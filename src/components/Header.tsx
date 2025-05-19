import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-6 border-b border-primary/30">
      <div className="max-w-screen-lg mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-medium text-secondary">
          Steve Otten
        </Link>
        <nav className="flex gap-6">
          <Link 
            href="/" 
            className="text-primary hover:text-accent transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/projects/" 
            className="text-primary hover:text-accent transition-colors"
          >
            Projects
          </Link>
          <Link 
            href="/about/" 
            className="text-primary hover:text-accent transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}