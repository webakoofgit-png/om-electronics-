import type { FAQ } from '../types';

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How do I request an electrical service?',
    answer: 'You can use the enquiry form on our Contact page, call us, or message on WhatsApp. Share a short description of the issue and your location so we can respond with available slots.',
    category: 'general',
  },
  {
    id: '2',
    question: 'Do you offer priority / urgent service?',
    answer: 'Yes. When requesting a service you can select priority options such as Within 24 hours (Urgent), Within 3 days, or Within a month. Urgent slots depend on technician availability in your area.',
    category: 'scheduling',
  },
  {
    id: '3',
    question: 'Which areas do you currently serve?',
    answer: 'We primarily serve Surat and nearby areas. For other locations, contact us to check partner or franchise coverage.',
    category: 'general',
  },
  {
    id: '4',
    question: 'What should I prepare before the technician arrives?',
    answer: 'Clear access to the affected area, switch off relevant circuits if safe, and keep any previous invoices or photos of the issue ready. Note any recent changes or events related to the problem.',
    category: 'repairs',
  },
  {
    id: '5',
    question: 'Are your technicians trained and safety-focused?',
    answer: 'We emphasise proper workmanship, isolation of live circuits, and use of appropriate protection. Safety is a core part of how we approach every job.',
    category: 'safety',
  },
  {
    id: '6',
    question: 'Do you provide written estimates before starting work?',
    answer: 'Yes. For non-emergency work we discuss the scope and share an estimate before proceeding. Emergency prioritisation may require on-site assessment first.',
    category: 'general',
  },
  {
    id: '7',
    question: 'Can you help with both repairs and new installations?',
    answer: 'Yes. We handle repairs, inspections, wiring, switchboard upgrades, lighting, and appliance-related electrical work.',
    category: 'installations',
  },
  {
    id: '8',
    question: 'How are materials charged?',
    answer: 'Labour and materials are discussed transparently. You may choose to provide materials or have us source quality components.',
    category: 'general',
  },
  {
    id: '9',
    question: 'Is there a service warranty?',
    answer: 'Workmanship is supported for a reasonable period after completion. Exact terms are confirmed at the time of service.',
    category: 'repairs',
  },
  {
    id: '10',
    question: 'Do you sell electrical parts and products?',
    answer: 'Yes. Electrical products and spares are available. For purchases you will be directed to WhatsApp for ordering and home delivery options with priority selection.',
    category: 'general',
  },
  {
    id: '11',
    question: 'What delivery options are available for products?',
    answer: 'Home delivery is offered with priority choices: Within 24 hours (Urgent), Within 3 days, Within a week, or Within a month. Free shipping applies within a limited radius; details are confirmed on WhatsApp.',
    category: 'scheduling',
  },
  {
    id: '12',
    question: 'How do I know if a repair is urgent?',
    answer: 'Burning smells, sparking, repeated tripping, no power in critical areas, or any sign of shock risk should be treated as urgent. Switch off the relevant supply if safe and contact us immediately.',
    category: 'safety',
  },
];

export const getFaqsByCategory = (category: FAQ['category']) =>
  faqs.filter((f) => f.category === category);
