import { useState, type FormEvent } from 'react';
import { Tv, Clock, ShieldCheck, CheckCircle2, Phone, AlertTriangle, MapPin, Wrench, Check } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { WHATSAPP_BASE } from '../data/products';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

const issueCategories = [
  { id: 'screen', title: 'Screen or picture issue', desc: 'Blank, dim, flickering or damaged display' },
  { id: 'power', title: 'TV won’t turn on', desc: 'No power, restarting or standby issue' },
  { id: 'sound', title: 'Sound issue', desc: 'No audio, distortion or speaker problem' },
  { id: 'smart-tv', title: 'Smart TV or connection', desc: 'Wi-Fi, apps, HDMI or input problem' },
  { id: 'remote', title: 'Remote or accessory', desc: 'Pairing help or compatible replacement' },
  { id: 'parts', title: 'TV part enquiry', desc: 'Board, backlight, panel or other component' },
  { id: 'other', title: 'Other TV issue', desc: 'Describe a different TV problem' },
];

const timeSlots = [
  { id: 'soon', label: 'As soon as possible', badge: 'Request' },
  { id: 'morning', label: 'Morning (9:00 AM - 12:00 PM)', badge: 'Preferred' },
  { id: 'afternoon', label: 'Afternoon (12:00 PM - 4:00 PM)', badge: 'Preferred' },
  { id: 'evening', label: 'Evening (4:00 PM - 8:00 PM)', badge: 'Preferred' },
  { id: 'flexible', label: 'Next available day', badge: 'Flexible' },
];

export function BookElectrician() {
  const [issue, setIssue] = useState('screen');
  const [slot, setSlot] = useState('morning');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [model, setModel] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const issueTitle = issueCategories.find((item) => item.id === issue)?.title ?? issue;
    const slotLabel = timeSlots.find((item) => item.id === slot)?.label ?? slot;
    const message = encodeURIComponent(
      `Hello Rurdra Electronics,\n\nI would like to request a TV service appointment.\n` +
      `TV issue: ${issueTitle}\nPreferred time: ${slotLabel}\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\n` +
      (model ? `TV brand/model: ${model}\n` : '') +
      (notes ? `Additional details: ${notes}\n` : '') +
      `\nPlease confirm service availability, any visit charge, and the appointment time.`
    );
    const opened = window.open(`${WHATSAPP_BASE}?text=${message}`, '_blank', 'noopener,noreferrer');
    if (!opened) setError('Your browser blocked WhatsApp. Please allow the WhatsApp window or call us directly.');
    else { setError(''); setSubmitted(true); }
  };

  return <>
    <section className="bg-navy py-14 md:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Book TV Service' }]} />
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/20 px-3 py-1 text-xs font-semibold text-amber"><Tv className="h-3.5 w-3.5" /> TV service enquiry · Surat</span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"><Clock className="h-3.5 w-3.5 text-amber" /> Request a preferred time</span>
      </div>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">Request a TV Service Appointment</h1>
      <p className="mt-3 max-w-2xl text-base text-white/80 md:text-lg">Tell us what’s happening with your TV and request a preferred visit time. Our team will contact you to confirm availability, any visit charge and next steps.</p>
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/90">
        <a href="tel:+918975187479" className="inline-flex items-center gap-2 rounded-xl bg-amber px-4 py-2 font-semibold text-navy shadow hover:bg-amber/90"><Phone className="h-4 w-4" /> Call: +91 89751 87479</a>
        <a href={WHATSAPP_BASE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 font-semibold text-white hover:bg-white/20"><WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> WhatsApp Support</a>
      </div>
    </div></section>

    <section className="bg-warm-white py-12 md:py-16"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
      <div className="lg:col-span-8"><div className="rounded-2xl border border-light-grey bg-white p-6 shadow-sm md:p-8">
        <div className="mb-6 flex items-center justify-between border-b border-light-grey pb-4"><div><h2 className="text-xl font-bold text-navy">Request a TV Technician Visit</h2><p className="text-sm text-charcoal/70">Choose the issue and send your request on WhatsApp.</p></div><Wrench className="h-7 w-7 text-electric" /></div>
        {submitted ? <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center"><CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-green-600" /><h3 className="text-xl font-bold text-navy">WhatsApp request prepared</h3><p className="mt-2 text-sm text-charcoal/80">The team will confirm service availability, any visit charge and your appointment time.</p><button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-semibold text-electric underline">Request another appointment</button></div> : <form onSubmit={handleBooking} className="space-y-8">
          <div><label className="mb-3 block text-sm font-bold text-navy">Step 1: What do you need help with?</label><div className="grid gap-3 sm:grid-cols-2">{issueCategories.map((item) => { const active = issue === item.id; return <button key={item.id} type="button" onClick={() => setIssue(item.id)} className={`flex flex-col rounded-xl border p-4 text-left transition-all ${active ? 'border-electric bg-electric/5 shadow-sm ring-1 ring-electric' : 'border-light-grey bg-white hover:border-electric/50'}`}><span className="flex items-center justify-between text-sm font-semibold text-navy">{item.title}{active && <Check className="h-4 w-4 text-electric" />}</span><span className="mt-1 text-xs text-charcoal/60">{item.desc}</span></button>; })}</div></div>
          <div><label className="mb-3 block text-sm font-bold text-navy">Step 2: Preferred visit time</label><div className="space-y-2">{timeSlots.map((item) => { const active = slot === item.id; return <button key={item.id} type="button" onClick={() => setSlot(item.id)} className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm ${active ? 'border-electric bg-electric/5 font-semibold text-navy ring-1 ring-electric' : 'border-light-grey bg-white text-charcoal/80 hover:border-electric/50'}`}><span className="flex items-center gap-3"><span className={`flex h-4 w-4 items-center justify-center rounded-full border ${active ? 'border-electric bg-electric' : 'border-charcoal/30'}`}>{active && <span className="h-1.5 w-1.5 rounded-full bg-white" />}</span>{item.label}</span><span className="rounded-md bg-light-grey px-2 py-0.5 text-xs font-semibold text-charcoal/70">{item.badge}</span></button>; })}</div></div>
          <div><label className="mb-3 block text-sm font-bold text-navy">Step 3: Your contact and visit details</label><div className="grid gap-4 sm:grid-cols-2">
            <div><label className="mb-1 block text-xs font-medium text-charcoal/70">Your full name *</label><input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" className="w-full rounded-xl border border-light-grey px-3.5 py-2.5 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/20" /></div>
            <div><label className="mb-1 block text-xs font-medium text-charcoal/70">Mobile number *</label><input required type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Your phone number" className="w-full rounded-xl border border-light-grey px-3.5 py-2.5 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/20" /></div>
          </div><div className="mt-4"><label className="mb-1 block text-xs font-medium text-charcoal/70">Address and landmark in Surat *</label><input required value={address} onChange={(event) => setAddress(event.target.value)} placeholder="House/flat, area and landmark" className="w-full rounded-xl border border-light-grey px-3.5 py-2.5 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/20" /></div>
          <div className="mt-4"><label className="mb-1 block text-xs font-medium text-charcoal/70">TV brand and model (optional)</label><input value={model} onChange={(event) => setModel(event.target.value)} placeholder="Brand and model number from the TV label" className="w-full rounded-xl border border-light-grey px-3.5 py-2.5 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/20" /></div>
          <div className="mt-4"><label className="mb-1 block text-xs font-medium text-charcoal/70">Issue details (optional)</label><textarea rows={3} value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Describe what happens. For a parts enquiry, mention the part or attach its label photo in WhatsApp." className="w-full rounded-xl border border-light-grey px-3.5 py-2.5 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/20" /></div></div>
          {error && <p className="flex items-center gap-1.5 text-sm font-medium text-red-600"><AlertTriangle className="h-4 w-4" />{error}</p>}
          <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-[#25D366] px-5 py-3.5 text-base font-bold text-white transition hover:bg-[#1EBE5D]"><WhatsAppIcon className="mr-2 h-5 w-5" /> Send Appointment Request via WhatsApp</button>
          <p className="text-center text-xs text-charcoal/60">This sends a request, not a confirmed booking. Confirm any visit charge and service terms with the team before proceeding.</p>
        </form>}
      </div></div>

      <aside className="space-y-6 lg:col-span-4">
        <div className="rounded-2xl border border-light-grey bg-white p-6 shadow-sm"><h3 className="flex items-center gap-2 font-bold text-navy"><ShieldCheck className="h-5 w-5 text-electric" /> Before your visit</h3><ul className="mt-4 space-y-3 text-sm text-charcoal/80"><li className="flex items-start gap-2.5"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" /><span>Ask the team whether a visit or inspection charge applies.</span></li><li className="flex items-start gap-2.5"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" /><span>Confirm diagnosis, estimate and warranty terms before authorizing repair.</span></li><li className="flex items-start gap-2.5"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" /><span>For parts, share your TV model and ask us to confirm compatibility and genuine/OEM availability.</span></li></ul></div>
        <div className="rounded-2xl border border-light-grey bg-white p-6 shadow-sm"><h3 className="flex items-center gap-2 font-bold text-navy"><MapPin className="h-5 w-5 text-electric" /> Ask about service in your area</h3><p className="mt-2 text-sm text-charcoal/70">Share your address so the team can confirm whether a visit is available in your part of Surat.</p><div className="mt-3 flex flex-wrap gap-1.5">{['Bhatar', 'Athwa', 'Udhana', 'Vesu', 'Adajan', 'Pal', 'Piplod', 'City Light', 'Althan'].map((area) => <span key={area} className="rounded-lg bg-light-grey px-2.5 py-1 text-xs font-medium text-navy">{area}</span>)}</div></div>
        <div className="rounded-2xl bg-navy p-6 text-white shadow-sm"><h4 className="text-sm font-bold uppercase tracking-wider text-amber">Questions about your TV?</h4><p className="mt-1 text-sm text-white/80">Call us to ask about TV service and appointment availability.</p><a href="tel:+918975187479" className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-amber px-4 py-3 font-bold text-navy hover:bg-amber/90"><Phone className="h-4 w-4" /> +91 89751 87479</a></div>
      </aside>
    </div></section>
  </>;
}
