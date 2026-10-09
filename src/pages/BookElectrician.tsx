import { useState, type FormEvent } from 'react';
import {
  Zap,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  AlertTriangle,
  Calendar,
  MapPin,
  Wrench,
  Check,
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import { WHATSAPP_BASE } from '../data/products';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

const issueCategories = [
  { id: 'tripping', title: 'MCB Tripping / Power Cut', desc: 'Sudden outage, tripping breaker or spark' },
  { id: 'switchboard', title: 'Switch, Socket or Board', desc: 'Burnt switch, loose plug, or new modular board' },
  { id: 'fan_light', title: 'Fan, Light or Appliance', desc: 'Ceiling fan, LED panel, tube or chandelier' },
  { id: 'wiring', title: 'Short Circuit / Wire Fault', desc: 'Burning smell, exposed wire or earth leakage' },
  { id: 'inverter', title: 'Inverter & Battery Setup', desc: 'Inverter wiring, battery backup or replacement' },
  { id: 'inspection', title: 'General Inspection / AMC', desc: 'Full home or commercial electrical checkup' },
];

const timeSlots = [
  { id: 'urgent', label: 'Emergency (Within 60-90 Mins)', badge: 'Fastest' },
  { id: 'morning', label: 'Morning Slot (9:00 AM - 12:00 PM)', badge: 'Today' },
  { id: 'afternoon', label: 'Afternoon Slot (12:00 PM - 4:00 PM)', badge: 'Today' },
  { id: 'evening', label: 'Evening Slot (4:00 PM - 8:00 PM)', badge: 'Today' },
  { id: 'tomorrow', label: 'Tomorrow (Any convenient time)', badge: 'Next Day' },
];

export function BookElectrician() {
  const [selectedIssue, setSelectedIssue] = useState('tripping');
  const [selectedSlot, setSelectedSlot] = useState('morning');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const selectedIssueObj = issueCategories.find((i) => i.id === selectedIssue);
  const selectedSlotObj = timeSlots.find((s) => s.id === selectedSlot);

  const handleBooking = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) {
      setError('Please provide your name, phone number, and address.');
      return;
    }
    setError('');

    // Pre-fill WhatsApp message for quick booking
    const issueText = selectedIssueObj?.title || selectedIssue;
    const slotText = selectedSlotObj?.label || selectedSlot;
    const msg = encodeURIComponent(
      `Hello Om Electronics,\n\nI want to *Book an Electrician*:\n` +
      `• *Issue:* ${issueText}\n` +
      `• *Preferred Slot:* ${slotText}\n` +
      `• *Customer:* ${name}\n` +
      `• *Phone:* ${phone}\n` +
      `• *Address:* ${address}\n` +
      (details ? `• *Notes:* ${details}\n` : '') +
      `\nPlease confirm the electrician visit.`
    );

    window.open(`${WHATSAPP_BASE}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      {/* Header Banner */}
      <section className="bg-navy py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Book Electrician' }]} />
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/20 px-3 py-1 text-xs font-semibold text-amber">
              <Zap className="h-3.5 w-3.5" /> Doorstep Service in Surat
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
              <Clock className="h-3.5 w-3.5 text-amber" /> 8 AM - 8 PM Everyday
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
            Book a Professional Electrician
          </h1>
          <p className="mt-3 max-w-2xl text-base text-white/80 md:text-lg">
            Certified technicians for urgent repairs, installations, short-circuit fixes, and wiring.
            Transparent pricing with fast doorstep arrival.
          </p>

          {/* Emergency call pill */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/90">
            <a
              href="tel:+919173400060"
              className="inline-flex items-center gap-2 rounded-xl bg-amber px-4 py-2 font-semibold text-navy shadow hover:bg-amber/90 transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Helpline: +91 91734 00060
            </a>
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> WhatsApp Support
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-warm-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            
            {/* Booking Form Column */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-light-grey bg-white p-6 shadow-sm md:p-8">
                <div className="mb-6 flex items-center justify-between border-b border-light-grey pb-4">
                  <div>
                    <h2 className="text-xl font-bold text-navy">Schedule Electrician Visit</h2>
                    <p className="text-sm text-charcoal/70">
                      Fill out the form below or submit directly to confirm on WhatsApp.
                    </p>
                  </div>
                  <Wrench className="h-7 w-7 text-electric" />
                </div>

                {submitted ? (
                  <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
                    <CheckCircle2 className="mx-auto h-12 w-12 text-green-600 mb-3" />
                    <h3 className="text-xl font-bold text-navy">Booking Request Created!</h3>
                    <p className="mt-2 text-sm text-charcoal/80">
                      Your request has been forwarded to our WhatsApp team. We will confirm technician arrival shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm font-semibold text-electric underline"
                    >
                      Book another service
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBooking} className="space-y-8">
                    {/* Step 1: Select Issue */}
                    <div>
                      <label className="block text-sm font-bold text-navy mb-3">
                        Step 1: Select What You Need Help With
                      </label>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {issueCategories.map((issue) => {
                          const active = selectedIssue === issue.id;
                          return (
                            <button
                              key={issue.id}
                              type="button"
                              onClick={() => setSelectedIssue(issue.id)}
                              className={`flex flex-col text-left rounded-xl border p-4 transition-all ${
                                active
                                  ? 'border-electric bg-electric/5 shadow-sm ring-1 ring-electric'
                                  : 'border-light-grey bg-white hover:border-electric/50'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className={`text-sm font-semibold ${active ? 'text-electric' : 'text-navy'}`}>
                                  {issue.title}
                                </span>
                                {active && <Check className="h-4 w-4 text-electric" />}
                              </div>
                              <span className="mt-1 text-xs text-charcoal/60">{issue.desc}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 2: Preferred Slot */}
                    <div>
                      <label className="block text-sm font-bold text-navy mb-3">
                        Step 2: Choose Date / Urgency Slot
                      </label>
                      <div className="space-y-2">
                        {timeSlots.map((slot) => {
                          const active = selectedSlot === slot.id;
                          return (
                            <button
                              key={slot.id}
                              type="button"
                              onClick={() => setSelectedSlot(slot.id)}
                              className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm transition-all ${
                                active
                                  ? 'border-electric bg-electric/5 text-navy font-semibold ring-1 ring-electric'
                                  : 'border-light-grey bg-white text-charcoal/80 hover:border-electric/50'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                                  active ? 'border-electric bg-electric' : 'border-charcoal/30'
                                }`}>
                                  {active && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                                </span>
                                <span>{slot.label}</span>
                              </div>
                              <span className="rounded-md bg-light-grey px-2 py-0.5 text-xs font-semibold text-charcoal/70">
                                {slot.badge}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 3: Customer Details */}
                    <div>
                      <label className="block text-sm font-bold text-navy mb-3">
                        Step 3: Your Contact & Address Details
                      </label>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-medium text-charcoal/70 mb-1">Your Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rahul Patel"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-xl border border-light-grey px-3.5 py-2.5 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/20"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-charcoal/70 mb-1">Mobile Number *</label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 9876543210"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full rounded-xl border border-light-grey px-3.5 py-2.5 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/20"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-xs font-medium text-charcoal/70 mb-1">Service Address & Landmark in Surat *</label>
                        <input
                          type="text"
                          required
                          placeholder="House/Flat No., Building name, Society/Area, Landmark"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full rounded-xl border border-light-grey px-3.5 py-2.5 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/20"
                        />
                      </div>

                      <div className="mt-4">
                        <label className="block text-xs font-medium text-charcoal/70 mb-1">Specific Issue Details (Optional)</label>
                        <textarea
                          rows={2}
                          placeholder="Describe the issue or any specific appliances involved..."
                          value={details}
                          onChange={(e) => setDetails(e.target.value)}
                          className="w-full rounded-xl border border-light-grey px-3.5 py-2.5 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/20"
                        />
                      </div>
                    </div>

                    {error && (
                      <p className="text-sm font-medium text-red-600 flex items-center gap-1.5">
                        <AlertTriangle className="h-4 w-4" /> {error}
                      </p>
                    )}

                    <Button type="submit" variant="primary" size="lg" className="w-full py-3.5 text-base font-bold bg-[#25D366] hover:bg-[#1EBE5D] text-white">
                      <WhatsAppIcon className="h-5 w-5 mr-2" /> Confirm & Book via WhatsApp
                    </Button>
                    <p className="text-center text-xs text-charcoal/60">
                      No online advance payment needed. Pay technician directly after inspection or service.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Side Information Column */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Visiting & Charges Card */}
              <div className="rounded-2xl border border-light-grey bg-white p-6 shadow-sm">
                <h3 className="font-bold text-navy flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-electric" /> Visiting & Service Policy
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-charcoal/80">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span><strong>₹150 nominal visiting/inspection charge</strong> (waived or adjusted in repair bill).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>Upfront estimate given before technician starts any repair work.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>Genuine branded spare parts provided directly from our store.</span>
                  </li>
                </ul>
              </div>

              {/* Service Areas */}
              <div className="rounded-2xl border border-light-grey bg-white p-6 shadow-sm">
                <h3 className="font-bold text-navy flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-electric" /> Areas We Serve in Surat
                </h3>
                <p className="mt-2 text-xs text-charcoal/70">
                  Fast doorstep response across:
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {['Bhatar', 'Athwa', 'Udhana', 'Vesu', 'Adajan', 'Pal', 'Piplod', 'Ghopadpatti', 'City Light', 'Althan'].map((area) => (
                    <span key={area} className="rounded-lg bg-light-grey px-2.5 py-1 text-xs font-medium text-navy">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Helpline */}
              <div className="rounded-2xl bg-navy p-6 text-white shadow-sm">
                <h4 className="font-bold text-amber text-sm uppercase tracking-wider">Need Immediate Help?</h4>
                <p className="mt-1 text-sm text-white/80">
                  If there is an active short circuit or risk of electrical fire, switch off the main MCB and call our priority line immediately:
                </p>
                <a
                  href="tel:+919173400060"
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-amber px-4 py-3 font-bold text-navy hover:bg-amber/90 transition-colors"
                >
                  <Phone className="h-4 w-4" /> +91 91734 00060
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

