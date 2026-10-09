import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface Crumb {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: Crumb[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-charcoal/60">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-navy">
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5" />
            {item.to ? (
              <Link to={item.to} className="hover:text-navy">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-navy">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
