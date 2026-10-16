import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { Breadcrumb } from '../components/Breadcrumb';
import { Search, ShieldCheck, MessageCircle, Tv } from 'lucide-react';

export function About() {
  return <>
    <section className="bg-navy py-16 md:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'About Us' }]} />
      <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">About Rurdra Electronics</h1>
      <p className="mt-4 max-w-2xl text-lg text-white/70">TV components, genuine part enquiries and model-matching support in Surat.</p>
    </div></section>
    <section className="py-16 md:py-24"><div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div><p className="mb-2 text-sm font-semibold uppercase tracking-wider text-electric">Our Approach</p>
        <h2 className="text-3xl font-bold tracking-tight text-navy">The right TV part starts with the right model</h2>
        <p className="mt-4 leading-relaxed text-charcoal/70">Rurdra Electronics helps customers identify TV components and replacement parts. Send us the TV brand and model number, plus a clear photo of the part label when possible. We can check compatibility and confirm whether an original or OEM part is available.</p>
        <p className="mt-4 leading-relaxed text-charcoal/70">We confirm the part number, availability, price and delivery details directly before an order is placed. Catalogue images are illustrative and do not represent live stock.</p>
      </div>
      <div className="overflow-hidden rounded-2xl"><img src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=85" alt="Television display" className="aspect-[4/3] w-full object-cover" loading="lazy" /></div>
    </div></section>
    <section className="bg-light-grey py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading title="How we help" description="Clear information for finding a compatible TV component." />
      <div className="grid gap-6 md:grid-cols-3">{[
        { icon: Tv, title: 'TV parts', desc: 'Enquire about panels, boards, backlights, remotes and other components.' },
        { icon: Search, title: 'Model matching', desc: 'We use your TV model and part number to check compatibility.' },
        { icon: ShieldCheck, title: 'Availability confirmed', desc: 'Ask us to confirm genuine/OEM status, price and delivery before ordering.' },
      ].map((item) => <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm"><item.icon className="mb-4 h-6 w-6 text-electric" /><h3 className="font-semibold text-navy">{item.title}</h3><p className="mt-2 text-sm text-charcoal/70">{item.desc}</p></div>)}</div>
    </div></section>
    <section className="py-16 md:py-24"><div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
      <h2 className="text-2xl font-bold text-navy md:text-3xl">Looking for a TV component?</h2>
      <p className="mt-4 leading-relaxed text-charcoal/70">Send the brand, model number and a photo of the part label. We’ll help you check the match and availability.</p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"><Button to="/products" size="lg">Browse TV Parts</Button><Button to="/contact" variant="outline" size="lg">Contact Us</Button></div>
    </div></section>
    <CTASection title="Need help identifying a part?" description="Share the TV model and component details with our team." />
  </>;
}
