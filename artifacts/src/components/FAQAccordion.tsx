import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '../types';

interface FAQAccordionProps {
  items: FAQ[];
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-light-grey last:border-0">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base font-medium text-navy">{faq.question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-charcoal/50 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-sm leading-relaxed text-charcoal/70">{faq.answer}</p>
      </div>
    </div>
  );
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="rounded-2xl border border-light-grey bg-white px-6 shadow-sm">
      {items.map((faq) => (
        <FAQItem key={faq.id} faq={faq} />
      ))}
    </div>
  );
}
