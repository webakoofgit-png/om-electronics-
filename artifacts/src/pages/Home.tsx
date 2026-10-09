import { Link } from 'react-router-dom';
import {
  Shield,
  Award,
  MessageSquare,
  Clock,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTASection } from '../components/CTASection';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faqs';

const trustItems = [
  { icon: Shield, title: 'Safety-First', desc: 'Every job prioritises safe isolation and correct practices.' },
  { icon: Award, title: 'Quality Workmanship', desc: 'Neat, lasting solutions with attention to detail.' },
  { icon: MessageSquare, title: 'Clear Communication', desc: 'We explain the issue and options before starting.' },
  { icon: Clock, title: 'Reliable Service', desc: 'Scheduled visits and responsive support when you need us.' },
];

const steps = [
  { step: '01', title: 'Tell us what you need', desc: 'Share the issue or requirement via form, call or WhatsApp.' },
  { step: '02', title: 'Discuss the requirement', desc: 'We clarify scope, priority and available slots.' },
  { step: '03', title: 'Arrange the service', desc: 'Confirm time, location and any material preferences.' },
  { step: '04', title: 'Complete the work', desc: 'Technician completes the job, tests and hands over.' },
];

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&q=80"
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber">
              Electrical Services
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Electrical Solutions.
              <br />
              <span className="text-amber">Done Right.</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/80 md:text-xl">
              Reliable electrical services for homes and businesses, delivered with care,
              precision, and a focus on safety.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/services" variant="amber" size="lg">
                Explore Our Services
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="border-white/60 text-white hover:bg-white hover:text-navy"
              >
                Get in Touch
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-amber" /> Quality workmanship
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-amber" /> Safety-first service
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-amber" /> Responsive support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust intro */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                alt="Electrician performing electrical work"
                className="h-full w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-electric">
                Why ElectricFault
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
                Committed to safe, reliable electrical service
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/70">
                We focus on understanding your requirement, explaining the work clearly, and
                delivering solutions that prioritise safety and lasting results. Whether it is a
                small repair or a larger installation, the approach remains the same: careful,
                professional, and easy to understand.
              </p>
              <Button to="/about" variant="secondary" className="mt-6">
                About Us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-light-grey py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Electrical services for homes & businesses"
            description="From repairs and inspections to wiring and upgrades — clear options and dedicated detail pages for each service."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Commitments"
            title="Why customers choose us"
            description="These are the principles we work by — not independently verified claims."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-light-grey bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-navy">{item.title}</h3>
                <p className="text-sm text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-light-grey py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="How it works"
            description="A simple, transparent flow from enquiry to completed work."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="relative rounded-2xl bg-white p-6 shadow-sm">
                <span className="text-3xl font-bold text-electric/20">{s.step}</span>
                <h3 className="mt-2 font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-charcoal/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Gallery"
            title="Featured work"
            description="Illustrative images of electrical installations and work environments. Actual project photos will replace these when available."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
              'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
              'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
              'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80',
              'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80',
              'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
            ].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl aspect-[4/3]">
                <img
                  src={src}
                  alt={`Illustrative electrical work ${i + 1}`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-charcoal/50">
            Images are illustrative and not photographs of specific ElectricFault projects.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-light-grey py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Feedback"
            title="Customer testimonials"
            description="Placeholder reviews for layout demonstration. Genuine customer feedback will replace these."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQs"
            title="Frequently asked questions"
            description="Common questions about enquiries, repairs, installations and scheduling."
          />
          <FAQAccordion items={faqs.slice(0, 6)} />
          <div className="mt-8 text-center">
            <Link to="/faq" className="text-sm font-medium text-electric hover:underline">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
