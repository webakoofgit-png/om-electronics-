import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { getServiceBySlug, getRelatedServices, services } from '../data/services';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import { FAQAccordion } from '../components/FAQAccordion';
import { ServiceCard } from '../components/ServiceCard';
import { CTASection } from '../components/CTASection';

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-navy">Service not found</h1>
        <p className="mt-2 text-charcoal/70">The requested service does not exist.</p>
        <Button to="/services" className="mt-6">
          View All Services
        </Button>
      </div>
    );
  }

  const related = getRelatedServices(service.relatedSlugs);
  const serviceFaqs = service.faqs.map((f, i) => ({
    id: `sf-${i}`,
    question: f.question,
    answer: f.answer,
    category: 'general' as const,
  }));

  return (
    <>
      <section className="bg-navy py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Services', to: '/services' },
              { label: service.title },
            ]}
          />
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            {service.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-white/70">{service.shortDescription}</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy">About this service</h2>
              <p className="mt-3 leading-relaxed text-charcoal/70">{service.description}</p>
              <div className="mt-6 rounded-xl bg-light-grey p-5">
                <h3 className="font-semibold text-navy">The problem we address</h3>
                <p className="mt-2 text-sm text-charcoal/70">{service.problem}</p>
              </div>
              <Button to="/contact" className="mt-6" size="lg">
                Request this Service
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Scope */}
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-bold text-navy">Typical service scope</h2>
              <ul className="space-y-3">
                {service.scope.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-charcoal/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-bold text-navy">Key benefits</h2>
              <ul className="space-y-3">
                {service.benefits.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-charcoal/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process */}
          <div className="mt-16">
            <h2 className="mb-6 text-xl font-bold text-navy">How the service works</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, i) => (
                <div key={i} className="rounded-xl border border-light-grey bg-white p-5 shadow-sm">
                  <span className="text-2xl font-bold text-electric/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-2 text-sm font-medium text-navy">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          {serviceFaqs.length > 0 && (
            <div className="mx-auto mt-16 max-w-3xl">
              <h2 className="mb-6 text-center text-xl font-bold text-navy">
                Questions about {service.title}
              </h2>
              <FAQAccordion items={serviceFaqs} />
            </div>
          )}

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 text-xl font-bold text-navy">Related services</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((s) => (
                  <ServiceCard key={s.id} service={s} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection title={`Interested in ${service.title}?`} />
    </>
  );
}
