import { useRef, useState, useEffect } from 'react';
import {
  Shield,
  Award,
  MessageSquare,
  Clock,
  ArrowRight,
  CheckCircle2,
  Search,
  Heart,
  Undo2,
  Truck,
  Headset,
  Percent,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faqs';
import { products } from '../data/products';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

const trustItems = [
  { icon: Shield, title: 'Safety-First', desc: 'Every job prioritises safe isolation and correct practices.' },
  { icon: Award, title: 'Quality Workmanship', desc: 'Neat, lasting solutions with attention to detail.' },
  { icon: MessageSquare, title: 'Clear Communication', desc: 'We explain the issue and options before starting.' },
  { icon: Clock, title: 'Reliable Service', desc: 'Scheduled visits and responsive support when you need us.' },
];

const features = [
  { icon: Undo2, title: 'No Returns', desc: 'Shopping with no returns.' },
  { icon: Truck, title: 'Free Shipping', desc: 'Free Shipping around 5 KMs*.' },
  { icon: Headset, title: '8/8 Support', desc: 'Support available from 8 AM to 8 PM, always here just for you' },
  { icon: Percent, title: 'Discounts', desc: 'Special prices for our loyal customers.' },
];

const categories = [
  { name: 'Protection', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80' },
  { name: 'Switches', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  { name: 'Lighting', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80' },
  { name: 'Wiring', image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=400&q=80' },
  { name: 'Boards', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80' },
  { name: 'Tools', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&q=80' },
  { name: 'Inverters', image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&q=80' },
];

function CategoryCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative group/carousel">
      {/* Navigation Buttons */}
      <button
        onClick={() => handleScroll('left')}
        disabled={!canScrollLeft}
        aria-label="Previous categories"
        className={`absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-light-grey bg-white/95 text-navy shadow-lg backdrop-blur transition-all ${
          canScrollLeft
            ? 'hover:bg-electric hover:text-white hover:scale-105 opacity-100 cursor-pointer'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        onClick={() => handleScroll('right')}
        disabled={!canScrollRight}
        aria-label="Next categories"
        className={`absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-light-grey bg-white/95 text-navy shadow-lg backdrop-blur transition-all ${
          canScrollRight
            ? 'hover:bg-electric hover:text-white hover:scale-105 opacity-100 cursor-pointer'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Carousel Track with horizontal scroll and snap */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-5 sm:gap-7 lg:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-3"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((cat) => (
          <a
            href="/products"
            key={cat.name}
            className="group flex-shrink-0 w-32 sm:w-36 md:w-40 text-center snap-start transition-transform hover:-translate-y-1"
          >
            <div className="mx-auto mb-3 aspect-square w-28 sm:w-32 md:w-36 overflow-hidden rounded-full border-4 border-white bg-white shadow-sm transition-all duration-300 group-hover:border-electric group-hover:shadow-md">
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-navy transition group-hover:text-electric">
              {cat.name}
            </h3>
            <span className="text-xs text-charcoal/50 group-hover:text-electric transition inline-block mt-0.5">
              Explore →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-light-grey bg-white shadow-sm transition hover:shadow-md">
      <div className="absolute right-3 top-3 z-10">
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-charcoal shadow backdrop-blur transition hover:bg-electric hover:text-white">
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="aspect-[4/3] overflow-hidden bg-light-grey">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mt-1 text-base font-semibold text-navy">{product.name}</h3>
        <p className="mt-1 text-sm font-bold text-electric">₹{product.price.toLocaleString('en-IN')}</p>
        <Button
          href="/products"
          variant="outline"
          className="mt-4 w-full border-charcoal/20 text-navy hover:border-[#25D366] hover:bg-[#25D366]/5"
        >
          <WhatsAppIcon className="mr-2 h-4 w-4 text-[#25D366]" />
          Order on WhatsApp
        </Button>
      </div>
    </div>
  );
}

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
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Electrical Solutions.
              <br />
              <span className="text-amber">Done Right.</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/80 md:text-xl">
              Your one-stop destination for electrical services, repairs, and high-quality parts.
            </p>
            
            {/* Search Bar matching target site */}
            <div className="mt-8 flex w-full max-w-md items-center overflow-hidden rounded-lg bg-white p-1">
              <input 
                type="text" 
                placeholder="Search Products..." 
                className="w-full bg-transparent px-4 py-2 text-charcoal outline-none placeholder:text-charcoal/40"
              />
              <button className="flex items-center justify-center rounded-md bg-electric px-4 py-2 text-white transition hover:bg-navy">
                <Search className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-amber" /> Book Electrician
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-amber" /> Shop Products
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-amber" /> Fast Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Banners */}
      <section className="border-b border-light-grey bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-electric/10 text-electric">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">{feature.title}</h4>
                  <p className="text-sm text-charcoal/60">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="bg-light-grey py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Shop By Categories"
            title="Popular Categories"
            description="Find exactly what you need from our extensive range of electrical components."
          />
          <CategoryCarousel />
        </div>
      </section>

      {/* Deal of the Day & Featured */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Deal of the Day"
            title="Featured Products"
            description="Explore our top-selling electrical components and supplies with direct doorstep ordering."
          />
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/products" variant="outline">
              See All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Services overview - kept from original but condensed */}
      <section className="bg-light-grey py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Book an Electrician"
            description="Professional electrical services for homes & businesses."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/book-electrician" variant="primary">
              Book Electrician Now
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Feedback"
            title="Customer testimonials"
            description="Genuine customer feedback from our happy clients."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-light-grey py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQs"
            title="Frequently asked questions"
            description="Common questions about enquiries, repairs, installations and scheduling."
          />
          <FAQAccordion items={faqs.slice(0, 6)} />
        </div>
      </section>
    </>
  );
}
