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
              By using this website or requesting services/products from Om Electronics, you agree
              to these terms. If you do not agree, please do not use the site or submit enquiries.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">2. Services</h2>
            <p>
              Electrical services are provided subject to availability, site conditions and agreed
              scope. Estimates are indicative until confirmed. Work is carried out with a focus on
              safety and professional standards. [Detailed service terms to be added.]
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">3. Products & delivery</h2>
            <p>
              Product orders are processed via WhatsApp. Prices and availability are confirmed at
              the time of order. Home delivery options include priority selection (e.g. within 24
              hours, 3 days, etc.). Free shipping may apply within a limited radius. No returns
              policy applies as stated by the business. [Full product terms to be confirmed.]
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
              Om Electronics
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
