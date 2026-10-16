import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { services } from '../data/services';
import { deliveryPriorities } from '../data/products';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  location: string;
  priority: string;
  message: string;
}

const initial: FormData = {
  fullName: '',
  phone: '',
  email: '',
  serviceRequired: '',
  location: '',
  priority: '',
  message: '',
};

export function EnquiryForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.fullName.trim()) e.fullName = 'Full name is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s+/g, '')))
      e.phone = 'Enter a valid 10-digit Indian mobile number';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email address';
    if (!form.serviceRequired) e.serviceRequired = 'Please select a service';
    if (!form.location.trim()) e.location = 'Location is required';
    if (!form.message.trim()) e.message = 'Please describe your requirement';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green-600" />
        <h3 className="text-xl font-semibold text-navy">Enquiry Received (Demo)</h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
          This is a frontend demonstration. Your enquiry has <strong>not</strong> been sent to
          Rurdra Electronics. In a live system this would be delivered to the team. Thank you for
          testing the form.
        </p>
        <Button
          className="mt-6"
          variant="secondary"
          onClick={() => {
            setSubmitted(false);
            setForm(initial);
          }}
        >
          Submit Another
        </Button>
      </div>
    );
  }

  const field = (
    name: keyof FormData,
    label: string,
    type = 'text',
    required = true
  ) => (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        type={type}
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-electric focus:ring-2 focus:ring-electric/20 ${
          errors[name] ? 'border-red-400' : 'border-light-grey'
        }`}
      />
      {errors[name] && <p className="mt-1 text-xs text-red-500">{errors[name]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {field('fullName', 'Full Name')}
        {field('phone', 'Phone Number', 'tel')}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {field('email', 'Email Address', 'email', false)}
        {field('location', 'Location / Area')}
      </div>

      <div>
        <label htmlFor="serviceRequired" className="mb-1.5 block text-sm font-medium text-navy">
          Service Required <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceRequired"
          value={form.serviceRequired}
          onChange={(e) => setForm({ ...form, serviceRequired: e.target.value })}
          className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-electric focus:ring-2 focus:ring-electric/20 ${
            errors.serviceRequired ? 'border-red-400' : 'border-light-grey'
          }`}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.id} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="other">Other / General Enquiry</option>
          <option value="product">Product Order / Delivery</option>
        </select>
        {errors.serviceRequired && (
          <p className="mt-1 text-xs text-red-500">{errors.serviceRequired}</p>
        )}
      </div>

      <div>
        <label htmlFor="priority" className="mb-1.5 block text-sm font-medium text-navy">
          Priority / Timeline
        </label>
        <select
          id="priority"
          value={form.priority}
          onChange={(e) => setForm({ ...form, priority: e.target.value })}
          className="w-full rounded-lg border border-light-grey bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-electric focus:ring-2 focus:ring-electric/20"
        >
          <option value="">Select preferred timeline</option>
          {deliveryPriorities.map((p) => (
            <option key={p.id} value={p.id}>
              {p.label}
            </option>
          ))}
        </select>
        <p className="mt-1 text-xs text-charcoal/50">
          Urgent (24 hrs) subject to availability in your area.
        </p>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Describe the issue or requirement..."
          className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-electric focus:ring-2 focus:ring-electric/20 ${
            errors.message ? 'border-red-400' : 'border-light-grey'
          }`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Submit Enquiry
      </Button>
    </form>
  );
}
