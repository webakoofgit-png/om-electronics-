import { useState, type FormEvent } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import { WHATSAPP_BASE } from '../data/products';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;

    const text = encodeURIComponent(
      `Hello Om Electronics,\n\n*General Contact Message*:\n` +
      `• *Name:* ${name}\n` +
      `• *Phone:* ${phone}\n` +
      (email ? `• *Email:* ${email}\n` : '') +
      `• *Subject:* ${subject}\n` +
      `• *Message:* ${message}`
    );

    window.open(`${WHATSAPP_BASE}?text=${text}`, '_blank');
    setSent(true);
  };

  return (
    <>
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Contact' }]} />
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Contact Om Electronics
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Have questions about electrical parts, bulk purchases, store location, or need assistance? Reach out to our team in Surat.
          </p>
        </div>
      </section>

      {/* Book Electrician Callout Banner */}
      <div className="bg-amber/10 border-b border-amber/20 py-3.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2.5 text-navy font-medium">
            <Wrench className="h-4 w-4 text-amber shrink-0" />
            <span>Looking for doorstep electrician repair or installation?</span>
          </div>
          <Button to="/book-electrician" variant="secondary" size="sm" className="whitespace-nowrap">
            Go to Book Electrician <ArrowRight className="h-3.5 w-3.5 ml-1" />
          </Button>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-navy">Get In Touch</h2>
                <p className="mt-2 text-sm text-charcoal/70">
                  Visit our store in Surat or reach us directly via phone, email, or WhatsApp.
                </p>
              </div>

              <ul className="space-y-5">
                <li className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric/10 text-electric">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">Store Address</p>
                    <p className="mt-0.5 text-sm text-charcoal/70 leading-relaxed">
                      Shop No. 2, Plot No. 5-6, Sarvoday Nagar, nr. Gandhi Kutir society,
                      Udhana - Magdalla Rd, Bhatar, Athwa, Surat-395007, Gujarat
                    </p>
                    <a
                      href="https://maps.app.goo.gl/f1SCyVFhJMM1sJwN6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center text-sm font-semibold text-electric hover:underline"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric/10 text-electric">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">Phone Helpline</p>
                    <a href="tel:+919173400060" className="mt-0.5 block text-sm font-semibold text-electric hover:underline">
                      +91 91734 00060
                    </a>
                    <span className="text-xs text-charcoal/50">Direct store line</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric/10 text-electric">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">Email Support</p>
                    <a
                      href="mailto:info@omelectronics.in"
                      className="mt-0.5 text-sm text-electric hover:underline"
                    >
                      info@omelectronics.in
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
                    <WhatsAppIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">WhatsApp Chat</p>
                    <a
                      href={WHATSAPP_BASE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 text-sm font-semibold text-electric hover:underline"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric/10 text-electric">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">Store & Support Hours</p>
                    <p className="mt-0.5 text-sm text-charcoal/70">8:00 AM – 8:00 PM (Monday to Sunday)</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* General Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-light-grey bg-white p-6 shadow-sm md:p-8">
                <h2 className="mb-2 text-xl font-bold text-navy">Send Us a Message</h2>
                <p className="mb-6 text-sm text-charcoal/70">
                  Send your question, store feedback, or inquiry directly to our team.
                </p>

                {sent ? (
                  <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-green-600 mb-2" />
                    <h3 className="text-lg font-bold text-navy">Message Sent!</h3>
                    <p className="mt-1 text-sm text-charcoal/70">
                      Your message has been initiated. Our team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-4 text-sm font-semibold text-electric underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-navy mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full rounded-xl border border-light-grey px-3.5 py-2.5 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/20"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-navy mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit mobile number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full rounded-xl border border-light-grey px-3.5 py-2.5 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/20"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-navy mb-1">Email Address (Optional)</label>
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-xl border border-light-grey px-3.5 py-2.5 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/20"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-navy mb-1">Subject</label>
                        <select
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full rounded-xl border border-light-grey px-3.5 py-2.5 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/20"
                        >
                          <option value="General Enquiry">General Enquiry</option>
                          <option value="Product Availability">Product Availability & Pricing</option>
                          <option value="Bulk Order Inquiry">Bulk / Contractor Inquiry</option>
                          <option value="Feedback or Complaint">Feedback or Complaint</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1">Message *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Write your message or question here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full rounded-xl border border-light-grey px-3.5 py-2.5 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/20"
                      />
                    </div>

                    <Button type="submit" variant="primary" className="w-full py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold">
                      <WhatsAppIcon className="h-4 w-4 mr-2" /> Send Message via WhatsApp
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
