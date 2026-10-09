import { useState } from 'react';
import { Search } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { CTASection } from '../components/CTASection';
import { Breadcrumb } from '../components/Breadcrumb';
import { services } from '../data/services';

const categories = ['All', ...Array.from(new Set(services.map((s) => s.category)))];

export function Services() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = services.filter((s) => {
    const matchCat = category === 'All' || s.category === category;
    const matchSearch =
      !search ||
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Services' }]} />
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Our Electrical Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Professional electrical repairs, inspections, installations and upgrades for homes and
            businesses.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-sm flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40" />
              <input
                type="search"
                placeholder="Search services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-light-grey bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/20"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    category === c
                      ? 'bg-navy text-white'
                      : 'bg-light-grey text-charcoal hover:bg-navy/10'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="py-12 text-center text-charcoal/60">No services match your search.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection title="Ready to book a service?" />
    </>
  );
}
