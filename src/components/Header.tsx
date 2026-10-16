import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About us" },
  { to: "/products", label: "Shop" },
  { to: "/contact", label: "Contact" },
  { to: "/book-electrician", label: "Book TV Service" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-light-grey bg-warm-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 sm:h-20 items-center justify-between">
            <a href="/" className="group flex items-center gap-3">
              <img
                src="/rurdra-mark.svg"
                alt="Rurdra Electronics logo"
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-navy">
                Rurdra<span className="text-electric">Electronics</span>
              </span>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.to}
                  className="rounded-lg px-2 lg:px-3 py-2 text-sm font-medium text-charcoal/80 transition-colors hover:bg-light-grey hover:text-navy"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <Button to="/book-electrician" size="sm">
                Book TV Service
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-navy md:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            open ? "max-h-[500px] border-t border-light-grey" : "max-h-0"
          }`}
        >
          <div className="space-y-1 px-4 pt-2 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-charcoal hover:bg-light-grey"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button to="/book-electrician" className="w-full" onClick={() => setOpen(false)}>
                Book TV Service
              </Button>
            </div>
          </div>
        </div>
      </header>
  );
}
