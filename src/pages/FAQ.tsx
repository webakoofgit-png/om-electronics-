import { useState } from 'react';
import { faqs } from '../data/faqs';
import { FAQAccordion } from '../components/FAQAccordion';
import { Breadcrumb } from '../components/Breadcrumb';
import { CTASection } from '../components/CTASection';
import type { FAQ as FAQType } from '../types';

const categories: { id: FAQType['category'] | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'general', label: 'General' },
  { id: 'repairs', label: 'Repairs' },
  { id: 'installations', label: 'Installations' },
  { id: 'safety', label: 'Safety' },
  { id: 'scheduling', label: 'Scheduling' },
];

export function FAQ() {
  const [active, setActive] = useState<FAQType['category'] | 'all'>('all');

  const filtered =
    active === 'all' ? faqs : faqs.filter((f) => f.category === active);

  return (
    <>
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'FAQs' }]} />
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Answers about TV parts, model compatibility and ordering.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  active === c.id
                    ? 'bg-navy text-white'
                    : 'bg-light-grey text-charcoal hover:bg-navy/10'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <FAQAccordion items={filtered} />
        </div>
      </section>

      <CTASection title="Still have questions?" description="Send us an enquiry and we will get back to you." />
    </>
  );
}
