import { Breadcrumb } from '../components/Breadcrumb';

export function Terms() {
  return (
    <>
      <section className="bg-navy py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Terms & Conditions
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-4 text-sm leading-relaxed text-charcoal/80 sm:px-6">
          <p className="rounded-lg bg-amber/20 px-4 py-3 text-navy">
            <strong>Note:</strong> This is an editable template. Service conditions, cancellations,
            liability limits and other business-specific terms should be reviewed and completed by
            the business or legal counsel.
          </p>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">1. Acceptance</h2>
            <p>
              By using this website or requesting services/products from Rurdra Electronics, you agree
              to these terms. If you do not agree, please do not use the site or submit enquiries.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">2. Services</h2>
            <p>
              TV parts and TV purchase enquiries are subject to model compatibility and availability.
              Confirm the exact item, condition, price, warranty and delivery terms with Rurdra Electronics
              before placing an order.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">3. Products & delivery</h2>
            <p>
              Product enquiries and orders may be handled via WhatsApp. Catalogue images are
              illustrative; listings do not indicate live inventory or guaranteed OEM status. Price,
              availability, compatibility, warranty and delivery terms must be confirmed directly
              before ordering. Any return or cancellation terms will be confirmed at purchase.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">4. Cancellations</h2>
            <p>
              [Cancellation windows, charges and rescheduling policy â€” to be specified by the
              business.]
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">5. Liability</h2>
            <p>
              [Limitation of liability, insurance and warranty terms â€” to be reviewed and completed
              by the business.]
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">6. Website content</h2>
            <p>
              Content on this website is for general information. Images of work may be
              illustrative. We do not guarantee uninterrupted access to the site.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">7. Contact</h2>
            <p>
              Rurdra Electronics
              <br />
              Shop No. 2, Plot No. 5-6, Sarvoday Nagar, Bhatar, Surat-395007, Gujarat
              <br />
              Email: info@omelectronics.in
            </p>
          </div>

          <p className="text-xs text-charcoal/50">
            Last updated: [Date to be inserted]. This template is not legal advice.
          </p>
        </div>
      </section>
    </>
  );
}
