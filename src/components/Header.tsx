import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-6 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-lg mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-medium text-gray-900 dark:text-white">
          Steve Otten
        </Link>
        <nav className="flex gap-6">
          <Link 
            href="/" 
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </Link>
          <Link 
            href="/projects/" 
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Projects
          </Link>
          <Link 
            href="/about/" 
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}