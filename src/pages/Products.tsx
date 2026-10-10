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
          <Breadcrumb items={[{ label: 'Products' }]} />
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Electrical Products
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Quality electrical parts and materials. Select any product to order directly via WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Available products"
            description="Click a product to order via WhatsApp. Prices are indicative and will be confirmed."
            align="left"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-light-grey bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden bg-light-grey">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-electric">
                    {product.category}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-navy">{product.name}</h3>
                  <p className="mt-1 flex-1 text-sm text-charcoal/70">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-navy">₹{product.price.toLocaleString('en-IN')}</span>
                    {product.inStock ? (
                      <span className="text-xs font-medium text-green-600">In stock</span>
                    ) : (
                      <span className="text-xs font-medium text-red-500">Out of stock</span>
                    )}
                  </div>
                  <Button
                    href={buildProductWhatsAppLink(product)}
                    variant="primary"
                    className="mt-4 w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white"
                  >
                    <WhatsAppIcon className="h-4 w-4 mr-1.5" />
                    Order on WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-charcoal/50">
            Product images are illustrative. Final availability, price and delivery will be
            confirmed on WhatsApp. No returns policy as listed on the business site.
          </p>
        </div>
      </section>
    </>
  );
}
