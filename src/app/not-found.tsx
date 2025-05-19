import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-2xl font-bold text-secondary mb-4">
        Page Not Found
      </h1>
      <p className="text-muted-foreground mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="btn-primary px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center"
      >
        Return to Home
      </Link>
    </div>
  );
}