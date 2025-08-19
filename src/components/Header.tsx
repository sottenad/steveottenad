import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[var(--header)] text-[var(--header-text)] py-4 border-b border-[var(--border)]">
      <div className="max-w-screen-lg mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-[var(--header-text)] hover:text-[var(--purple-primary)] transition-colors">
          Steve Ottenad
        </Link>
        <nav className="flex gap-6">
          <Link 
            href="/" 
            className="text-[var(--header-text)] hover:text-[var(--purple-primary)] font-medium transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/projects/" 
            className="text-[var(--header-text)] hover:text-[var(--purple-primary)] font-medium transition-colors"
          >
            Projects
          </Link>
          <Link 
            href="/about/" 
            className="text-[var(--header-text)] hover:text-[var(--purple-primary)] font-medium transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}