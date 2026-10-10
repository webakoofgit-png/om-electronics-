import { MapPin, Mail, Phone, MessageCircle, Clock } from 'lucide-react';
import { EnquiryForm } from '../components/EnquiryForm';
import { Breadcrumb } from '../components/Breadcrumb';
import { WHATSAPP_BASE } from '../data/products';

export function Contact() {
  return (
    <>
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Contact' }]} />
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Request a service, ask a question, or order products. We will respond with next steps.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-navy">Get in touch</h2>
                <p className="mt-2 text-sm text-charcoal/70">
                  Use the form or reach us directly via phone, email or WhatsApp.
                </p>
              </div>

              <ul className="space-y-5">
                <li className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric/10 text-electric">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">Address</p>
                    <p className="mt-0.5 text-sm text-charcoal/70">
                      Shop No. 2, Plot No. 5-6, Sarvoday Nagar, nr. Gandhi Kutir society,
                      Udhana - Magdalla Rd, Bhatar, Athwa, Surat-395007, Gujarat
                    </p>
                    <a
                      href="https://maps.app.goo.gl/tSDbZoPB36sJTeZN8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm font-medium text-electric hover:underline"
                    >
                      Get directions →
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric/10 text-electric">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">Phone</p>
                    <a href="tel:+918975187479" className="mt-0.5 text-sm text-electric hover:underline">
                      +91 89751 87479
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric/10 text-electric">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">Email</p>
                    <a
                      href="mailto:info@electricfault.in"
                      className="mt-0.5 text-sm text-electric hover:underline"
                    >
                      info@electricfault.in
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric/10 text-electric">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">WhatsApp</p>
                    <a
                      href={WHATSAPP_BASE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 text-sm text-electric hover:underline"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric/10 text-electric">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">Support hours</p>
                    <p className="mt-0.5 text-sm text-charcoal/70">8 AM – 8 PM</p>
                  </div>
                </li>
              </ul>

              <div className="rounded-xl bg-light-grey p-5">
                <h3 className="font-semibold text-navy">What happens next?</h3>
                <ol className="mt-3 space-y-2 text-sm text-charcoal/70">
                  <li>1. We review your enquiry and priority preference.</li>
                  <li>2. You receive a response with available slots or product details.</li>
                  <li>3. Service or delivery is confirmed and scheduled.</li>
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-light-grey bg-white p-6 shadow-sm md:p-8">
                <h2 className="mb-6 text-xl font-bold text-navy">Send an enquiry</h2>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
