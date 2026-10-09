import { Star } from 'lucide-react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-light-grey bg-white p-6 shadow-sm">
      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating ? 'fill-amber text-amber' : 'text-light-grey'
            }`}
          />
        ))}
      </div>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-charcoal/80">
        “{testimonial.content}”
      </p>
      <div>
        <p className="font-semibold text-navy">{testimonial.name}</p>
        <p className="text-xs text-charcoal/50">{testimonial.role}</p>
      </div>
    </div>
  );
}
