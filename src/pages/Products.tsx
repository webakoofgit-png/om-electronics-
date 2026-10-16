import { products, buildProductWhatsAppLink } from '../data/products';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export function Products() {
  return (
    <>
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'TV Parts' }]} />
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">TVs, Genuine Components & Parts</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">Browse TV component categories and enquire about your exact model. We confirm part number, genuine/OEM availability and price with you before ordering.</p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="TV parts catalogue" description="These listings help you start an enquiry; they do not indicate live stock. Share your TV model and part label so we can check compatibility and availability." align="left" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col overflow-hidden rounded-2xl border border-light-grey bg-white shadow-sm transition hover:shadow-md">
                <div className="aspect-[4/3] overflow-hidden bg-light-grey"><img src={product.image} alt={product.name} className="h-full w-full object-cover" loading="lazy" /></div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-electric">{product.category}</span>
                  <h3 className="mt-1 text-lg font-semibold text-navy">{product.name}</h3>
                  <p className="mt-1 flex-1 text-sm text-charcoal/70">{product.description}</p>
                  <p className="mt-4 text-sm font-bold text-navy">Ask for price & availability</p>
                  <Button href={buildProductWhatsAppLink(product)} variant="primary" className="mt-4 w-full bg-[#25D366] text-white hover:bg-[#1EBE5D]">
                    <WhatsAppIcon className="mr-1.5 h-4 w-4" /> Check compatibility on WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-charcoal/50">Images are illustrative. Please confirm TV model, part number, genuine/OEM status, price and delivery terms before ordering.</p>
        </div>
      </section>
    </>
  );
}
