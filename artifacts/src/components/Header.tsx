import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Zap } from 'lucide-react';
import { Button } from './Button';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur-md border-b border-light-grey">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-18">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-amber transition-transform group-hover:scale-105">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-navy">
              Electric<span className="text-electric">Fault</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-light-grey text-navy'
                      : 'text-charcoal/80 hover:bg-light-grey hover:text-navy'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 text-sm font-medium text-charcoal/80 hover:text-navy"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">Call Us</span>
            </a>
            <Button to="/contact" size="sm">
              Request a Service
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-navy md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 border-t border-light-grey' : 'max-h-0'
        }`}
      >
        <div className="space-y-1 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2.5 text-base font-medium ${
                  isActive ? 'bg-light-grey text-navy' : 'text-charcoal hover:bg-light-grey'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-2">
            <Button to="/contact" className="w-full" onClick={() => setOpen(false)}>
              Request a Service
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
