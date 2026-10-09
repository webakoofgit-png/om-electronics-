import { Breadcrumb } from '../components/Breadcrumb';

export function Privacy() {
  return (
    <>
      <section className="bg-navy py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-4 text-sm leading-relaxed text-charcoal/80 sm:px-6">
          <p className="rounded-lg bg-amber/20 px-4 py-3 text-navy">
            <strong>Note:</strong> This is a basic editable template. Business-specific legal
            information, data practices and compliance details should be reviewed and updated by
            the business or legal counsel before publication.
          </p>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">1. Introduction</h2>
            <p>
              ElectricFault (“we”, “us”) respects your privacy. This policy describes how we may
              collect, use and protect information when you use our website or contact us for
              services or products.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">2. Information we collect</h2>
            <p>
              When you submit an enquiry form or contact us, we may collect your name, phone
              number, email address, location, service requirements and message content. Website
              usage data may be collected through standard analytics tools [to be confirmed].
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">3. How we use information</h2>
            <p>
              Information is used to respond to enquiries, schedule services, process product
              orders, and improve our communication. We do not sell personal information to third
              parties.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">4. Sharing of information</h2>
            <p>
              We may share necessary details with technicians or partners solely to fulfil a
              service or delivery request. [Additional sharing practices — e.g. legal requirements —
              to be specified by the business.]
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">5. Data retention & security</h2>
            <p>
              We retain enquiry data only as long as needed for service fulfilment and follow-up.
              [Security measures and retention periods to be confirmed.]
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">6. Your rights</h2>
            <p>
              You may request access, correction or deletion of your personal information by
              contacting us at info@electricfault.in. [Applicable rights under local law to be
              reviewed.]
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">7. Contact</h2>
            <p>
              For privacy-related questions: info@electricfault.in
              <br />
              Address: Shop No. 2, Plot No. 5-6, Sarvoday Nagar, Bhatar, Surat-395007, Gujarat
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
