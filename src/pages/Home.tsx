import { useRef, useState, useEffect } from 'react';
import {
  Shield,
  MessageSquare,
  CheckCircle2,
  Search,
  Heart,
  Headset,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { FAQAccordion } from '../components/FAQAccordion';
import { faqs } from '../data/faqs';
import { products, buildProductWhatsAppLink } from '../data/products';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

const features = [
  { icon: Search, title: 'Model matching', desc: 'Share your TV model for a compatibility check.' },
  { icon: Shield, title: 'Genuine part enquiries', desc: 'Ask us to confirm OEM / original availability.' },
  { icon: Headset, title: 'Direct support', desc: 'Get help identifying the right TV component.' },
  { icon: MessageSquare, title: 'WhatsApp ordering', desc: 'Confirm part number, price and delivery first.' },
];

const categories = [
  { name: 'TV Components', image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&q=80' },
  { name: 'TV Parts', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80' },
  { name: 'TV Accessories', image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&q=80' },
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
        className="flex gap-5 sm:gap-7 lg:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-3 md:justify-center"
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
        <p className="mt-1 text-sm font-bold text-electric">Ask for price & availability</p>
        <Button
          href={buildProductWhatsAppLink(product)}
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
              src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=1600&q=85"
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              TV Parts &
              <br />
              <span className="text-amber">Genuine Components.</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/80 md:text-xl">
              Find the right TV component with model-based support. Enquire about original and OEM parts, compatibility and pricing before you order.
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
                <CheckCircle2 className="h-4 w-4 text-amber" /> TV components & parts
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
            description="Browse TV components, replacement parts and accessories. Availability depends on your exact TV model."
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
            description="Explore common TV part enquiries. Ask us to confirm model compatibility, genuine availability and price."
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

      {/* TV support */}
      <section className="bg-light-grey py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Need help finding a part?"
            title="Get a TV model match"
            description="Send the TV brand, model number and a photo of the part label. We’ll help check compatibility and whether an original/OEM component is available."
          />
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="https://wa.me/918975187479?text=Hello%20Om%20Electronics%2C%20I%20need%20help%20finding%20a%20TV%20part.%20I%20will%20share%20the%20TV%20model%20and%20part%20photo." variant="primary">
              Ask about a TV part
            </Button>
            <Button to="/book-electrician" variant="outline">
              Book TV Service
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-light-grey py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQs"
            title="Frequently asked questions"
            description="Common questions about finding, matching and ordering TV parts."
          />
          <FAQAccordion items={faqs.slice(0, 6)} />
        </div>
      </section>
    </>
  );
}
