import { Link } from 'react-router-dom';
import { Zap, MapPin, Mail, Phone } from 'lucide-react';
import { services } from '../data/services';

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber text-navy">
                <Zap className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold">
                Electric<span className="text-amber">Fault</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/70">
              Reliable electrical services for homes and businesses. Safety, quality workmanship, and clear communication.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/products', label: 'Products' },
                { to: '/about', label: 'About Us' },
                { to: '/faq', label: 'FAQs' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/70 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-white/70 transition hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                <span>
                  Shop No. 2, Plot No. 5-6, Sarvoday Nagar, nr. Gandhi Kutir society, Udhana - Magdalla Rd, Bhatar, Athwa, Surat-395007, Gujarat
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-amber" />
                <a href="mailto:info@electricfault.in" className="hover:text-white">
                  info@electricfault.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-amber" />
                <a href="tel:+918975187479" className="hover:text-white">
                  +91 89751 87479
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} ElectricFault. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/50">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
