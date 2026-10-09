import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { Breadcrumb } from '../components/Breadcrumb';
import { Shield, Wrench, Users, Heart } from 'lucide-react';

export function About() {
  return (
    <>
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About Us' }]} />
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            About ElectricFault
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            A practical electrical services business focused on safety, clear communication and
            reliable workmanship.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-electric">
                Our Approach
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-navy">
                Electrical work done with care and clarity
              </h2>
              <p className="mt-4 leading-relaxed text-charcoal/70">
                ElectricFault serves homeowners and businesses that need dependable electrical
                repairs, inspections, installations and upgrades. We emphasise understanding the
                requirement first, explaining options clearly, and completing work with a focus on
                safety and quality.
              </p>
              <p className="mt-4 leading-relaxed text-charcoal/70">
                Based in Surat, Gujarat, we work on residential and light commercial electrical
                needs. Product sales and home delivery support customers who need parts and
                materials alongside service.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                alt="Electrical work environment"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-grey py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Mission & philosophy"
            description="What guides how we work with every customer."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: 'Safety first',
                desc: 'Isolation, correct protection devices and safe practices on every job.',
              },
              {
                icon: Wrench,
                title: 'Quality workmanship',
                desc: 'Neat installations and repairs intended to last, not just fix temporarily.',
              },
              {
                icon: Users,
                title: 'Clear communication',
                desc: 'We explain findings and options so you can decide with confidence.',
              },
              {
                icon: Heart,
                title: 'Customer focus',
                desc: 'Respect for your time, property and priorities throughout the process.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 text-electric">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">
            Why consider ElectricFault
          </h2>
          <p className="mt-4 leading-relaxed text-charcoal/70">
            If you need electrical repair, inspection, wiring or an upgrade and prefer a
            straightforward, safety-conscious approach with clear communication, we are ready to
            help. Share your requirement and we will respond with available options.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/services" size="lg">
              Explore Services
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
