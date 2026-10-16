import { CTASection } from '../components/CTASection';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';

const supportTopics = [
  ['Find a component', 'Enquire about TV panels, boards, backlights, remotes and other replacement parts.'],
  ['Check the model match', 'Share the brand, full TV model number and a photo of the part label.'],
  ['Confirm before ordering', 'We confirm compatibility, genuine/OEM availability, pricing and delivery details directly.'],
];

export function Services() {
  return <>
    <section className="bg-navy py-16 md:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'TV Support' }]} />
      <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">TV Parts & Model Support</h1>
      <p className="mt-4 max-w-2xl text-lg text-white/70">Get help identifying replacement parts and checking compatibility for your television.</p>
    </div></section>
    <section className="py-12 md:py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-3">{supportTopics.map(([title, description]) => <article key={title} className="rounded-2xl border border-light-grey bg-white p-6 shadow-sm"><h2 className="text-lg font-semibold text-navy">{title}</h2><p className="mt-2 text-sm leading-relaxed text-charcoal/70">{description}</p></article>)}</div>
      <div className="mt-10 text-center"><Button to="/products">Browse TV Parts</Button></div>
    </div></section>
    <CTASection title="Need help identifying a TV part?" />
  </>;
}
