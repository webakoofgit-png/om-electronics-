import type { FAQ } from '../types';

export const faqs: FAQ[] = [
  { id: '1', question: 'How do I find the right part for my TV?', answer: 'Share the TV brand and full model number. A clear photo of the label on the existing component helps us check the match.', category: 'general' },
  { id: '2', question: 'Do you sell original TV components?', answer: 'Ask us to confirm whether a genuine original/OEM part is available for your exact model. Availability and part number are checked before ordering.', category: 'general' },
  { id: '3', question: 'Are the products shown in stock?', answer: 'The catalogue is for enquiries and does not show live inventory. Contact us to confirm current availability for your TV model.', category: 'scheduling' },
  { id: '4', question: 'How can you confirm compatibility?', answer: 'Send the model number from the back of the TV and the part number printed on the component. Photos of both labels are helpful.', category: 'repairs' },
  { id: '5', question: 'How much does a replacement part cost?', answer: 'Price depends on the exact component and model. We confirm the price and delivery details with you before you place an order.', category: 'general' },
  { id: '6', question: 'Can I order through WhatsApp?', answer: 'Yes. Use the WhatsApp enquiry button on a part listing and add your TV model number. You can attach photos in the chat.', category: 'general' },
  { id: '7', question: 'Do you offer TV repair service?', answer: 'Contact us with your location and TV issue to ask about service availability. Any visit or repair terms will be confirmed directly.', category: 'repairs' },
  { id: '8', question: 'Where is Rurdra Electronics located?', answer: 'Our store is in Bhatar, Surat, Gujarat. See the Contact page for the address and map link.', category: 'general' },
];

export const getFaqsByCategory = (category: FAQ['category']) => faqs.filter((f) => f.category === category);
