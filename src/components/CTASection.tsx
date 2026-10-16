import { Button } from './Button';

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = 'Looking for a TV part?',
  description = 'Share your TV model and component details. We’ll help check compatibility and availability.',
}: CTASectionProps) {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
        <p className="mt-4 text-base text-white/70 md:text-lg">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/products" variant="amber" size="lg">
            Browse TV Parts
          </Button>
          <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
