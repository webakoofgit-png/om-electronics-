import { Link } from 'react-router-dom';
import {
  Wrench,
  ClipboardCheck,
  Cable,
  PanelTop,
  Lightbulb,
  Plug,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import type { Service } from '../types';

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  ClipboardCheck,
  Cable,
  PanelTop,
  Lightbulb,
  Plug,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Wrench;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-light-grey bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-electric/30 hover:shadow-md"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric transition-colors group-hover:bg-electric group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-navy group-hover:text-electric">
        {service.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-charcoal/70">
        {service.shortDescription}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-electric">
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
