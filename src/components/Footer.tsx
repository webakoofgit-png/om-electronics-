import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-2">
            <a href="/" className="group flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-0.5 shadow transition-transform group-hover:scale-105">
                <img
                  src="/rurdra-mark.svg"
                  alt="Rurdra Electronics logo"
                  className="h-full w-full rounded-md object-contain"
                />
              </div>
              <span className="text-xl font-bold">
                Rurdra<span className="text-amber">Electronics</span>
              </span>
            </a>
            <ul className="mt-6 space-y-4 text-sm text-white/70 max-w-md">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-amber" />
                <div>
                  <p>Shop No. 2, Plot No. 5-6, Sarvoday Nagar, nr. Gandhi Kutir society, Udhana - Magdalla Rd, Bhatar, Athwa, Surat-395007, Gujarat</p>
                  <a href="https://maps.app.goo.gl/f1SCyVFhJMM1sJwN6" target="_blank" rel="noreferrer" className="mt-2 flex items-center gap-1 font-semibold text-amber hover:text-white transition-colors">
                    GET DIRECTION <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-amber" />
                <a href="mailto:info@omelectronics.in" className="hover:text-white transition-colors">
                  info@omelectronics.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-amber" />
                <a href="tel:+918975187479" className="hover:text-white transition-colors">
                  +91 89751 87479
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-amber uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact us" },
                { to: "/products", label: "TV Parts Catalogue" },
                { to: "/book-electrician", label: "Book TV Service" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.to} className="text-white/70 transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-amber uppercase">
              Policies
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/shipping", label: "Shipping & Delivery Policy" },
                { to: "/refund", label: "Cancellation & Refund" },
                { to: "/privacy", label: "Privacy Policy" },
                { to: "/terms", label: "Terms & Conditions" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.to} className="text-white/70 transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Rurdra Electronics. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/50">
             Payment: 
             {/* Payment icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
